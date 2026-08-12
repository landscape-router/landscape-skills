# 不能上网排查手册

按顺序逐层排查:先 LAN、再 WAN、最后验证 DNS。

## ① 检查 LAN

- 接口状态:`GET /api/v1/interfaces/all`,确认 LAN 接口 `UP`(BOOT 开启)
- **LAN 路由转发服务**是否开启:`GET /api/v1/services/lan/{iface_name}`,未开启则开启
- LAN DHCPv4 是否分配地址:`GET /api/v1/services/dhcp_v4/assigned_ips`

## ② 检查 WAN

- WAN 接口状态:`GET /api/v1/interfaces/all`,确认 `UP`
- **WAN 路由转发服务**是否开启:`GET /api/v1/services/wan/{iface_name}`
- WAN 地址:`GET /api/v1/services/ip/status`(静态/DHCP)、`GET /api/v1/services/pppoe/status`(拨号)
- **NAT 服务**是否开启:`GET /api/v1/services/nat/status`,非 `running` 则修复
- PPPoE 场景额外检查 **MSS clamp**:`GET /api/v1/services/mss_clamp/status`(默认 clamp 1492,拨号上网异常时常与 MSS 有关)
- 有 IP 但 NAT 不生效 → 确认 IP 是在 UI 的 IP 服务里配置的;`ip addr`/`ip route` 手动配的 IP 对 NAT 无效

## ③ DNS 连通性验证

LAN、WAN 都正常后,用 `check` 验证路由器本身的上网解析链路(纯 API,不依赖 ping):

```bash
curl -sk "https://<LANSCAPE_URL>/api/v1/dns/service/check?flow_id=0&domain=example.com&record_type=A&apply_filter=false" \
  -H 'Authorization: Bearer <token>'
```

- 返回 `records` 非空 → DNS 解析链路通(服务运行、上游可达、外网可达)
- 返回空/错误 → 链路不通,检查:
  - 设备是否被归入某个 Flow(`GET /api/v1/flow/rules`),该 Flow 是否有 DNS 规则(`GET /api/v1/dns/rules`)—— **组内无 DNS 规则时 DNS 查询被丢弃**
  - DNS 服务状态可能虚报 `stop`,以 `check` 实际结果为准

## ④ 数据面验证

若 check 正常但设备仍无法上网,问题在数据面:

1. 查看连接信息:`GET /api/v1/metrics/connections`
2. 设备上可执行命令时,按需辅助:ping 网关 → ping 8.8.8.8 → nslookup,哪一步不通即定位到对应段
3. 若管理连接从 WAN 口进入且已失联:检查是否未先建 6443 静态映射就开了 NAT

## ⑤ 查某台设备的分流(走哪个 Flow)

**第一步:设备 → Flow 匹配**(`POST /api/v1/services/routing/trace/flow_match`)

```bash
curl -sk https://<LANSCAPE_URL>/api/v1/services/routing/trace/flow_match \
  -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' \
  -d '{"src_ipv4": "192.168.1.100", "src_mac": "aa:bb:cc:dd:ee:ff"}'
```

- `flow_id_by_mac` / `flow_id_by_ipv4` / `flow_id_by_ipv6` — 各自匹配到的 Flow
- `effective_flow_id` / `effective_flow_source` — 最终生效 Flow 及来源(`mac`/`ipv4`/`ipv6`/`default`,IP 优先于 MAC,未匹配走默认 Flow 0)

**第二步:设备 + 目标 IP → 数据面判定**(`POST /api/v1/services/routing/trace/verdict`)

```bash
curl -sk https://<LANSCAPE_URL>/api/v1/services/routing/trace/verdict \
  -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json' \
  -d '{"flow_id": 3, "src_ipv4": "192.168.1.100", "dst_ips": ["1.2.3.4"]}'
```

- `ip_rule_match` / `dns_rule_match` — 目的 IP 规则 / DNS 规则是否命中(mark + priority)
- `effective_rule_source` — 生效来源(`ip_rule`/`dns_rule`/`default`;DNS 规则 priority ≤ IP 规则时 DNS 优先)
- `effective_mark` — 生效 mark:`action`(`keep_going`/`direct`/`drop`/`redirect`)+ `flow_id`
- `has_cache` / `cached_mark` / `cache_consistent` — 路由缓存是否与预期一致;`cache_consistent: false` 说明改了规则但缓存未更新,可用 `POST /api/v1/services/routing/reset_cache` 重置

**对照配置**:Flow 的成员与出口 `GET /api/v1/flow/rules/flow_id/{id}`,该 Flow 的 IP 规则 `GET /api/v1/flow/dst_ip_rules/flow/{flow_id}`,DNS 规则 `GET /api/v1/dns/rules/flow/{flow_id}`

## ⑥ 查某个域名的情况

**DNS 链路**:`GET /api/v1/dns/service/check?flow_id=<设备所属 Flow>&domain=<域名>&record_type=A&apply_filter=false`

- `records` — 实际返回的记录(上游或重定向)
- `rule_id` — 命中的 DNS 规则;`redirect_id` — 命中的重定向规则
- `query_filtered` / `rule_filter` — 是否被规则过滤(only_ipv4/only_ipv6)
- `dynamic_redirect_source` — 命中动态重定向时其来源
- 查默认 Flow 用 `flow_id=0`;查具体设备所在的 Flow 用第 ⑤ 步得到的结果

## ⑦ 查域名最后的出口(完整链路)

按"域名 → IP → 动作 → 出口"四步串联:

1. **域名 → IP**:`GET /api/v1/dns/service/check`(见第 ⑥ 步),从 `records` 拿到解析结果 IP
2. **IP → 判定**:`POST /api/v1/services/routing/trace/verdict`(flow_id + 该 IP),看 `effective_mark.action`:
   - `drop` — 该域名的流量被丢弃(查 IP 规则/DNS 规则为何命中 drop)
   - `direct` — 直连,不走重定向
   - `redirect` — 重定向到容器/其他目标
   - `keep_going` — 继续匹配
   - 同时取 `effective_mark.flow_id`(实际生效的 Flow)
3. **Flow → 出口**:`GET /api/v1/flow/rules/flow_id/{flow_id}`,看 `flow_targets`:
   - `target.t = "interface"` + `name` — 从该网卡出口
   - `target.t = "netns"` + `container_name` — 进入该容器
4. **出口 IP → 目标**:确认出口网卡后,结合该 WAN 的地址(`GET /api/v1/services/ip/status` 等)确认实际源地址

完整示例(域名 `example.com` 的出口排查):check 拿到 IP → verdict 显示 `redirect` + flow_id=3 → flow 3 的 `flow_targets` 指向 `interface: wan1` → 流量从 wan1 出去

**数据面**:域名解析到的 IP 再走第 ⑤ 步的 `trace/verdict`,看该目标 IP 最终被如何处置(直连/丢弃/重定向)

## ⑧ 缓存一致性检查(两类缓存)

### 路由缓存(数据面)

- 检查:`trace/verdict` 响应的 `has_cache` / `cached_mark` / `cache_consistent`(见第 ⑤ 步)
  - `has_cache: true` 且 `cache_consistent: false` → 规则已改但缓存未更新,流量仍按旧 mark 转发
  - `cached_mark` 与 `expected_cache_mark` 对比可看到实际与预期差异
- 是否建议清理:
  - **建议**:修改了 Flow/IP 规则/DNS 规则后,`cache_consistent: false` → `POST /api/v1/services/routing/reset_cache` 重建路由缓存
  - **不建议**:`cache_consistent: true` 时无需清理(清理会短暂影响在途连接)
  - 清理后复查:`trace/verdict` 确认 `cache_consistent: true`

### DNS 运行时缓存

- 检查:`GET /api/v1/dns/service/check` 的 `cache_records`(缓存记录)与 `records`(上游/重定向记录):
  - `cache_records` 与 `records` 不一致 → 缓存过期或与上游不同步
  - `cache_records` 为空但 `records` 有值 → 未缓存,直接走上游,无需清理
- 是否建议清理:
  - **建议**:改上游/重定向规则后域名仍解析旧 IP、或怀疑缓存过期 → `POST /api/v1/dns/service/cache/refresh` 单条刷新(推荐,先刷新再比对);确认异常才用 `DELETE /api/v1/dns/service/cache` 删除
  - **不建议**:解析正常且 `cache_records` 与 `records` 一致时不操作(命中缓存是正常的性能设计)
  - 清理后复查:再次 `check` 确认 `records` 符合预期
