# gateway

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### POST /api/v1/gateway/restart

- operationId: `restart_gateway`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `http_port`: integer (required)
- `https_port`: integer (required)
- `https_ready`: boolean (required)
- `rule_count`: integer (required)
- `status`: ServiceStatus (required)
- `supported`: boolean (required)

> 外层包装 `LandscapeApiResp_GatewayStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/gateway/rules

- operationId: `list_gateway_rules`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `HttpUpstreamRuleConfig`[]

- `domains`: string[]
- `enable`: boolean (required)
- `id`: string
- `match_rule`: HttpUpstreamMatchRule (required)
- `name`: string (required)
- `update_at`: number
- `upstream`: HttpUpstreamConfig (required)

> 外层包装 `LandscapeApiResp_Vec_HttpUpstreamRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/gateway/rules

- operationId: `create_gateway_rule`

**参数**

> 无

**请求体**

- `domains`: string[]
- `enable`: boolean (required)
- `id`: string
- `match_rule`: HttpUpstreamMatchRule (required)
- `name`: string (required)
- `update_at`: number
- `upstream`: HttpUpstreamConfig (required)

**响应 data**

- `domains`: string[]
- `enable`: boolean (required)
- `id`: string
- `match_rule`: HttpUpstreamMatchRule (required)
- `name`: string (required)
- `update_at`: number
- `upstream`: HttpUpstreamConfig (required)

> 外层包装 `LandscapeApiResp_HttpUpstreamRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/gateway/rules/{id}

- operationId: `get_gateway_rule`

**参数**

- `id` (path): string (required) — Gateway rule ID

**请求体**

> 无

**响应 data**

- `domains`: string[]
- `enable`: boolean (required)
- `id`: string
- `match_rule`: HttpUpstreamMatchRule (required)
- `name`: string (required)
- `update_at`: number
- `upstream`: HttpUpstreamConfig (required)

> 外层包装 `LandscapeApiResp_HttpUpstreamRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/gateway/rules/{id}

- operationId: `delete_gateway_rule`

**参数**

- `id` (path): string (required) — Gateway rule ID

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/gateway/status

- operationId: `get_gateway_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `http_port`: integer (required)
- `https_port`: integer (required)
- `https_ready`: boolean (required)
- `rule_count`: integer (required)
- `status`: ServiceStatus (required)
- `supported`: boolean (required)

> 外层包装 `LandscapeApiResp_GatewayStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

## Schema


#### `ClientIpHeaderPolicy`

> 类型: `standard` | `none`


#### `HealthCheckConfig`

- `healthy_threshold`: integer (required)
- `interval_secs`: integer (required)
- `timeout_secs`: integer (required)
- `unhealthy_threshold`: integer (required)


#### `HttpPathGroup`

- `prefix`: string (required)
- `rewrite_mode`: PathRewriteMode
- `upstream`: HttpUpstreamConfig (required)


#### `HttpUpstreamConfig`

- `client_ip_headers`: ClientIpHeaderPolicy
- `header_conflict_mode`: ProxyHeaderConflictMode
- `health_check`: HealthCheckConfig | null
- `load_balance`: LoadBalanceMethod
- `request_headers`: ProxyRequestHeader[]
- `targets`: HttpUpstreamTarget[] (required)


#### `HttpUpstreamMatchRule`

> 变体: t=host | t=sni_proxy | t=legacy_path_prefix


#### `HttpUpstreamRuleConfig`

- `domains`: string[]
- `enable`: boolean (required)
- `id`: string
- `match_rule`: HttpUpstreamMatchRule (required)
- `name`: string (required)
- `update_at`: number
- `upstream`: HttpUpstreamConfig (required)


#### `HttpUpstreamTarget`

- `address`: string (required)
- `port`: integer (required)
- `skip_cert_verify`: boolean
- `tls`: boolean
- `weight`: integer


#### `LandscapeApiResp_GatewayStatus`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_HttpUpstreamRuleConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_HttpUpstreamRuleConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LoadBalanceMethod`

> 类型: `round_robin` | `random` | `consistent`


#### `PathRewriteMode`

> 类型: `preserve` | `strip_prefix`


#### `ProxyHeaderConflictMode`

> 类型: `set` | `append`


#### `ProxyRequestHeader`

- `name`: string (required)
- `value`: string (required)


#### `ServiceStatus`

> 变体: t=staring | t=running | t=stopping | t=stop | t=failed
