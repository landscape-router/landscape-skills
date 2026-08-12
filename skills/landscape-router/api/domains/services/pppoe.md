# Services: pppoe.md

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/services/pppoe

- operationId: `get_all_pppd_configs`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `PPPDServiceConfig`[]

- `attach_iface_name`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `pppd_config`: PPPDConfig (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_PPPDServiceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### PUT /api/v1/services/pppoe

- operationId: `handle_iface_pppd_config`

**参数**

> 无

**请求体**

- `attach_iface_name`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `pppd_config`: PPPDConfig (required)
- `update_at`: number

**响应 data**

> 未定义

### GET /api/v1/services/pppoe/attach/{iface_name}

- operationId: `get_iface_pppd_config_by_attach_iface_name`

**参数**

- `iface_name` (path): string (required) — Attach interface name

**请求体**

> 无

**响应 data**

> 数组: `PPPDServiceConfig`[]

- `attach_iface_name`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `pppd_config`: PPPDConfig (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_PPPDServiceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/services/pppoe/attach/{iface_name}

- operationId: `delete_and_stop_iface_pppd_by_attach_iface_name`

**参数**

- `iface_name` (path): string (required) — Attach interface name

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/services/pppoe/status

- operationId: `get_all_pppd_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_ServiceStatus`

### GET /api/v1/services/pppoe/{iface_name}

- operationId: `get_iface_pppd_config`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

- `attach_iface_name`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `pppd_config`: PPPDConfig (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_PPPDServiceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### PUT /api/v1/services/pppoe/{iface_name}

- operationId: `update_existing_iface_pppd_config`

**参数**

- `iface_name` (path): string (required) — Existing PPP interface name

**请求体**

- `attach_iface_name`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `pppd_config`: PPPDConfig (required)
- `update_at`: number

**响应 data**

> 未定义

### DELETE /api/v1/services/pppoe/{iface_name}

- operationId: `delete_and_stop_iface_pppd`

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


#### `LandscapeApiResp_Option_ServiceStatus`

- `args`: object
- `data`: t=staring | t=running | t=stopping | t=stop | t=failed | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_PPPDServiceConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_PPPDServiceConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `PPPDConfig`

- `ac`: string,null
- `default_route`: boolean (required)
- `password`: string (required)
- `peer_id`: string (required)
- `plugin`: PPPoEPlugin


#### `PPPDServiceConfig`

- `attach_iface_name`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `pppd_config`: PPPDConfig (required)
- `update_at`: number


#### `PPPoEPlugin`

> 类型: `rp_pppoe` | `pppoe`
