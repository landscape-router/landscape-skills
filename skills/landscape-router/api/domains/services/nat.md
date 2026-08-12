# Services: nat.md

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### PUT /api/v1/services/nat

- operationId: `handle_iface_nat_status`

**参数**

> 无

**请求体**

- `enable`: boolean (required)
- `iface_name`: string (required)
- `nat_config`: NatConfig (required)
- `update_at`: number

**响应 data**

> 未定义

### GET /api/v1/services/nat/status

- operationId: `get_all_nat_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_ServiceStatus`

### GET /api/v1/services/nat/{iface_name}

- operationId: `get_iface_nat_config`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

- `enable`: boolean (required)
- `iface_name`: string (required)
- `nat_config`: NatConfig (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_NatServiceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/services/nat/{iface_name}

- operationId: `delete_and_stop_iface_nat`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_ServiceStatus`

## Schema


#### `LandscapeApiResp_HashMap_String_ServiceStatus`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_NatServiceConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_ServiceStatus`

- `args`: object
- `data`: t=staring | t=running | t=stopping | t=stop | t=failed | null
- `error_id`: string
- `message`: string


#### `NatConfig`

- `icmp_in_range`: object (required)
- `tcp_range`: object (required)
- `udp_range`: object (required)


#### `NatServiceConfig`

- `enable`: boolean (required)
- `iface_name`: string (required)
- `nat_config`: NatConfig (required)
- `update_at`: number
