# Services: routing.md

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### POST /api/v1/services/routing/reset_cache

- operationId: `reset_cache`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/services/routing/trace/flow_match

- operationId: `trace_flow_match`

**参数**

> 无

**请求体**

- `src_ipv4`: string
- `src_ipv6`: string
- `src_mac`: string,null

**响应 data**

- `effective_flow_id`: integer (required) — Legacy aggregate effective flow. When both IPv4 and IPv6 are provided, IPv4 is preferred over IPv6, then MAC, then default flow.
- `effective_flow_id_v4`: integer (required) — Effective flow for IPv4 traffic: IPv4 match first, then MAC, then default flow.
- `effective_flow_id_v6`: integer (required) — Effective flow for IPv6 traffic: IPv6 match first, then MAC, then default flow.
- `effective_flow_source`: FlowMatchSource — Legacy aggregate winner for `effective_flow_id`.
- `effective_flow_source_v4`: FlowMatchSource — Winner for IPv4 traffic.
- `effective_flow_source_v6`: FlowMatchSource — Winner for IPv6 traffic.
- `flow_id_by_ip`: integer,null — Legacy aggregate IP match result. When both IPv4 and IPv6 are provided, IPv4 is preferred over IPv6.
- `flow_id_by_ipv4`: integer,null — Flow matched by source IPv4.
- `flow_id_by_ipv6`: integer,null — Flow matched by source IPv6.
- `flow_id_by_mac`: integer,null — Flow matched by exact MAC.

> 外层包装 `LandscapeApiResp_FlowMatchResult`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/services/routing/trace/verdict

- operationId: `trace_verdict`

**参数**

> 无

**请求体**

- `dst_ips`: string[] (required)
- `flow_id`: integer (required)
- `src_ipv4`: string
- `src_ipv6`: string

**响应 data**

- `verdicts`: SingleVerdictResult[] (required)

> 外层包装 `LandscapeApiResp_FlowVerdictResult`: `data` 即上表;另有 `message`/`error_id`/`args`

## Schema


#### `FlowMark`

- `action`: FlowMarkAction (required) — Action
- `allow_reuse_port`: boolean (required) — 允许 NAT 端口共享
- `flow_id`: integer (required) — Flow Id


#### `FlowMarkAction`

> 变体: t=keep_going | t=direct | t=drop | t=redirect


#### `FlowMatchRequest`

- `src_ipv4`: string
- `src_ipv6`: string
- `src_mac`: string,null


#### `FlowMatchSource`

> 类型: `default` | `mac` | `ipv4` | `ipv6`


#### `FlowRuleMatchResult`

- `mark`: FlowMark (required)
- `priority`: integer (required)


#### `FlowVerdictRequest`

- `dst_ips`: string[] (required)
- `flow_id`: integer (required)
- `src_ipv4`: string
- `src_ipv6`: string


#### `FlowVerdictSource`

> 类型: `default` | `ip_rule` | `dns_rule`


#### `LandscapeApiResp_FlowMatchResult`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_FlowVerdictResult`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `SingleVerdictResult`

- `cache_consistent`: boolean (required)
- `cached_mark`: integer,null
- `dns_rule_match`: FlowRuleMatchResult | null
- `dst_ip`: string (required)
- `effective_mark`: FlowMark (required)
- `effective_rule_source`: FlowVerdictSource
- `expected_cache_mark`: integer (required) — Mark value expected in route cache after runtime flow-id expansion.
- `has_cache`: boolean (required)
- `ip_rule_match`: FlowRuleMatchResult | null
