# Landscape 默认行为

## NAT 策略

- 默认比对称 NAT 更严格:destination-locked,同一内网端点只允许首个外部目标,其他目标丢包
- Full Cone 不默认开启,需按端口(静态映射)或域名/IP(规则)显式启用
- 意图:限制 PCDN 等长连接应用占上行带宽,属连接隔离而非限速

## 凭据与端口

- 默认账号密码:`root` / `root`
- HTTP `6300` 自动跳转 HTTPS `6443`(Web UI 与 API)

## 启动与配置

- 无配置文件可直接启动;`landscape_init.toml` 可选初始化
- 配置目录默认 `/root/.landscape-router`

## 服务开关

- 路由转发、NAT、DNS 等服务默认不生效,需在对应接口上显式开启
- **WAN 路由转发与 LAN 路由转发需同时开启**,只开一边无效
- NAT 依赖 UI 中配置的 IP 服务;绕过 UI 直接手动配 IP(如 `ip addr`/`ip route`)NAT 不生效

## Flow 策略组

- Flow 按设备(IP/MAC)归组,组内设备使用该组的 DNS 与转发策略
- **组内没有 DNS 规则时,该组设备的 DNS 查询会被丢弃**,表现为域名解析失败、无法上网;排查时给该 Flow 添加 DNS 规则
- 未归入任何 Flow 的设备走默认 Flow(默认带一条兜底 DNS 规则)

## 已知现象

- **DNS 服务状态接口可能虚报**:`GET /api/v1/dns/service` 返回 `stop` 但服务实际在运行,排障时以实际解析能力为准
