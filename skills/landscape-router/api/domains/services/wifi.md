# Services: wifi.md

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### PUT /api/v1/services/wifi

- operationId: `handle_wifi_service_config`

**参数**

> 无

**请求体**

- `config`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number

**响应 data**

> 未定义

### GET /api/v1/services/wifi/status

- operationId: `get_all_wifi_service_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_ServiceStatus`

### GET /api/v1/services/wifi/{iface_name}

- operationId: `get_wifi_service_config`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

- `config`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_WifiServiceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/services/wifi/{iface_name}

- operationId: `delete_and_stop_wifi_service`

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


#### `LandscapeApiResp_WifiServiceConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `WifiServiceConfig`

- `config`: string (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number
