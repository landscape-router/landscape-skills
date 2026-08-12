# Landscape Router API 操作指南

本指南说明 agent 如何通过 REST API 直接操作 landscape 路由器(查询状态、读写配置、触发操作)。

## 1. 获取路由器地址

按以下优先级确定目标路由器地址:

1. 环境变量 `LANSCAPE_URL`(如 `https://landscape.local:6443`)
2. 用户直接提供
3. 用户未提供时主动询问

默认端口为 `6443`(HTTPS)。如地址以 `http://` 开头或端口非 6443,以实际为准。

## 2. 认证

所有 `/api/v1/*` 接口均需要 Bearer Token。

### 登录获取 token

```bash
curl -sk https://<LANSCAPE_URL>/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"username": "admin", "password": "<password>"}'
```

响应结构(`LandscapeApiResp_LoginResult`,成功时只含 `data`):

```json
{
  "data": { "success": true, "token": "<JWT>" }
}
```

- 登录失败时 HTTP 401,`data.success` 为 false(登录是唯一在 data 中含 `success` 字段的接口)
- 密码由用户提供,不要臆测默认密码

从 `data.token` 取出 JWT,后续请求携带:

```bash
curl -sk https://<LANSCAPE_URL>/api/v1/system/info \
  -H 'Authorization: Bearer <token>'
```

## 3. API 结构与通用规则

- 接口前缀:`/api/v1/`;认证接口在 `/api/auth/`
- 模块划分:interfaces、services、dns、firewall、flow、nat、geo、devices、cert、docker、metrics、gateway、system
- 成功响应统一为 `LandscapeApiResp_<T>` 包装:`data`(业务数据);`message`/`error_id`/`args` 仅在出错时出现
- **成功与否看 HTTP 状态码**(2xx = 成功),不要依赖 `data.success` —— 只有登录响应的 `data` 里有 `success` 字段,其他接口没有
- 修改类接口(POST/PUT/DELETE)执行后,建议再 GET 一次验证结果
- 有 WebSocket 接口(`/api/ws/...`,query 携带 token),普通操作优先用 REST

## 3.1 错误响应

非 2xx 时响应体结构(`error_id` 为稳定的机器可读错误码,可用于排障定位):

```json
{
  "data": null,
  "error_id": "dns_check.refresh_requires_rule",
  "message": "DNS cache refresh requires a matched upstream rule for 'example.com'",
  "args": {}
}
```

- `error_id` 是稳定字符串,形如 `<模块>.<错误名>`,如 `dns_domain.invalid`、`dns_check.flow_not_found`
- `message` 面向人读,可能包含具体参数
- `args` 携带结构化错误参数(如有)
- 常见状态码:400(参数/请求体非法)、404(资源不存在)、409(状态冲突,如配置被他人修改)、401(认证失败)、5xx(内部错误)
- 排障时把 `error_id` 和 `message` 一起返回给用户/记录

### 3.2 已知问题与注意事项

- **DNS 服务状态可能不准**:`GET /api/v1/dns/service` 返回的 `t` 字段可能为 `stop`,但 DNS 服务实际仍在运行。这是已知现象,不要仅凭该接口的 `stop` 状态断定 DNS 未运行;排障时结合域名解析实际是否可用、`/api/v1/dns/service/check` 探测结果综合判断

## 4. 获取 OpenAPI spec(端点清单)

**关键原则:端点随版本变化,不要依赖记忆,以实际 spec 为准。**

### 4.1 参考样本(默认)

skill 自带 `openapi.sample.json`(v0.22.3),用于快速了解 API 结构和常用端点:

```bash
jq '.paths | keys' skills/landscape-router/api/openapi.sample.json
```

### 4.2 从目标路由器提取(推荐,保证与设备版本一致)

路由器 `/api/docs` 页面内嵌完整 OpenAPI spec,可直接提取:

```bash
node scripts/fetch-openapi.js --url https://landscape.local:6443
```

脚本输出提取后的 spec 文件路径,之后用 `jq` 查询:

```bash
jq '.paths | keys[]' <spec.json>
jq '.paths["/api/v1/dns/service"].get' <spec.json>
```

### 4.3 按版本从 GitHub 下载(兜底)

设备不可达但知道版本号时:

```bash
node scripts/fetch-openapi.js --version v0.22.3
```

### 4.4 判断设备版本与样本是否一致

```bash
curl -sk https://<LANSCAPE_URL>/api/v1/system/info -H 'Authorization: Bearer <token>'
```

与样本 `info.version` 比对;不一致时优先用 4.2 从设备提取。

## 5. 分域 API 文档(domains/)

`api/domains/` 下为按域拆分的静态 API 文档,由 `gen-api-docs.js` 基于样本自动生成,已随 skill 发布,可直接阅读。

### 5.1 文档结构

每个域文件包含:端点清单(方法/路径/operationId/参数/请求体/响应 data)+ 涉及的 Schema 字段表(已展开 `$ref`/`oneOf`)。

| 域 | 文件 | 内容 |
|---|---|---|
| 认证 | `domains/auth.md` | 登录 |
| 接口 | `domains/interfaces.md` | 接口/网桥/zone/wan_candidates |
| 系统 | `domains/system.md` | 配置读写、导出导入、系统信息 |
| DNS | `domains/dns.md` | 服务、规则、上游、重定向、DDNS、Provider |
| NAT | `domains/nat.md` | 静态映射 v4/v6 |
| 防火墙 | `domains/firewall.md` | 黑名单 |
| 流量 | `domains/flow.md` | 规则、目的 IP 规则 |
| 网关 | `domains/gateway.md` | 规则、状态、重启 |
| 证书 | `domains/cert.md` | 账户、证书签发 |
| Docker | `domains/docker.md` | 镜像、容器、网络 |
| 设备 | `domains/devices.md` | 入网设备 |
| 地理 | `domains/geo.md` | GeoIP/GeoSite |
| 指标 | `domains/metrics.md` | 连接、DNS 指标 |
| 服务(dhcp_v4) | `domains/services/dhcp_v4.md` | DHCPv4 |
| 服务(lan_ipv6) | `domains/services/lan_ipv6.md` | LAN IPv6 |
| 服务(pppoe) | `domains/services/pppoe.md` | PPPoE 拨号 |
| 服务(ipv6pd) | `domains/services/ipv6pd.md` | IPv6 PD |
| 服务(nat) | `domains/services/nat.md` | NAT 服务 |
| 服务(firewall) | `domains/services/firewall.md` | 防火墙服务 |
| 服务(wan/ip/lan/wifi/mss_clamp/routing/client) | `domains/services/*.md` | 其余服务 |

### 5.2 读取策略(token 控制)

- 只读需要的域文件,不要一次性全读
- 先用 `grep` 定位端点:如 `grep -n "static_mappings" domains/nat.md`
- 读文件时优先用偏移量只读端点所在段落
- 字段表已展开,无需再回查 `openapi.sample.json`

### 5.3 重新生成

样本版本与设备不一致时,可基于设备 spec 重新生成:

```bash
node scripts/gen-api-docs.js <spec.json> [输出目录]
```

- 默认输出到 `api/domains/`(覆盖)
- 生成结果仅由脚本决定,人工补充说明请放独立文件,避免被覆盖

## 6. 常用端点速查(样本 v0.22.3)

> 以下仅作参考,具体字段以实际 spec 为准。

| 用途 | 方法 | 路径 |
|---|---|---|
| 系统信息/版本 | GET | `/api/v1/system/info` |
| 配置导出 | GET | `/api/v1/system/config/export` |
| 配置导入 | POST | `/api/v1/system/config/import` |
| 接口列表 | GET | `/api/v1/interfaces/all` |
| 服务状态(NAT/DNS/PPPoE 等) | GET | `/api/v1/services/<module>/status` |
| NAT 静态映射 v4/v6 | GET/POST | `/api/v1/nat/static_mappings/v4`、`/v6` |
| DNS 服务配置 | GET/POST/DELETE | `/api/v1/dns/service` |
| DNS 规则 | GET/POST | `/api/v1/dns/rules` |
| 防火墙黑名单 | GET/POST | `/api/v1/firewall/blacklists` |
| 流量规则 | GET/POST | `/api/v1/flow/rules` |
| 网关状态 | GET | `/api/v1/gateway/status` |
| 网关重启 | POST | `/api/v1/gateway/restart` |

## 7. 操作流程

1. 确定路由器地址(见第 1 节)
2. 登录获取 token(见第 2 节)
3. 读取对应域文档(见第 5 节;设备版本与样本不符时,先用 4.2 提取并 5.3 重新生成)
4. 按域文档查询目标端点的方法、参数、请求体 schema
5. 执行请求,检查 HTTP 状态码与响应(见 3.1);失败时依据 `error_id`/`message` 定位
6. 修改类操作后 GET 验证
