# firewall

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/firewall/blacklists

- operationId: `get_firewall_blacklists`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `FirewallBlacklistConfig`[]

- `enable`: boolean (required)
- `id`: string
- `remark`: string (required)
- `source`: FirewallBlacklistSource[] (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_FirewallBlacklistConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/firewall/blacklists

- operationId: `add_firewall_blacklist`

**参数**

> 无

**请求体**

- `enable`: boolean (required)
- `id`: string
- `remark`: string (required)
- `source`: FirewallBlacklistSource[] (required)
- `update_at`: number

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `remark`: string (required)
- `source`: FirewallBlacklistSource[] (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_FirewallBlacklistConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/firewall/blacklists/{id}

- operationId: `get_firewall_blacklist`

**参数**

- `id` (path): string (required) — Firewall blacklist ID

**请求体**

> 无

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `remark`: string (required)
- `source`: FirewallBlacklistSource[] (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_FirewallBlacklistConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/firewall/blacklists/{id}

- operationId: `del_firewall_blacklist`

**参数**

- `id` (path): string (required) — Firewall blacklist ID

**请求体**

> 无

**响应 data**

> 未定义

## Schema


#### `FirewallBlacklistConfig`

- `enable`: boolean (required)
- `id`: string
- `remark`: string (required)
- `source`: FirewallBlacklistSource[] (required)
- `update_at`: number


#### `FirewallBlacklistSource`

> 变体: GeoConfigKey | IpConfig


#### `GeoConfigKey`

- `attribute_key`: string,null (required)
- `inverse`: boolean (required)
- `key`: string (required)
- `name`: string (required)


#### `IpConfig`

- `ip`: string (required)
- `prefix`: integer (required)


#### `LandscapeApiResp_FirewallBlacklistConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_FirewallBlacklistConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string
