# Services: ipv6pd.md

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/services/ipv6pd

- operationId: `get_all_ipv6pd_configs`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `IPV6PDServiceConfig`[]

- `config`: IPV6PDConfig (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_IPV6PDServiceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### PUT /api/v1/services/ipv6pd

- operationId: `handle_iface_pd`

**参数**

> 无

**请求体**

- `config`: IPV6PDConfig (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number

**响应 data**

> 未定义

### GET /api/v1/services/ipv6pd/infos

- operationId: `get_current_ip_prefix_info`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_Option_LDIAPrefix`

### GET /api/v1/services/ipv6pd/prefix-status

- operationId: `get_all_ipv6pd_prefix_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_IPV6PDPrefixStatus`

### GET /api/v1/services/ipv6pd/status

- operationId: `get_all_ipv6pd_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_ServiceStatus`

### GET /api/v1/services/ipv6pd/{iface_name}

- operationId: `get_iface_pd_config`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

- `config`: IPV6PDConfig (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_IPV6PDServiceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/services/ipv6pd/{iface_name}

- operationId: `delete_and_stop_ipv6pd_service`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_ServiceStatus`

## Schema


#### `IPV6PDConfig`

- `expected_pd_len`: integer
- `mac`: string (required)


#### `IPV6PDServiceConfig`

- `config`: IPV6PDConfig (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number


#### `LDIAPrefix`

- `last_update_time`: number (required)
- `preferred_lifetime`: integer (required) — unit: s
- `prefix_ip`: string (required)
- `prefix_len`: integer (required)
- `valid_lifetime`: integer (required) — unit: s


#### `LandscapeApiResp_HashMap_String_IPV6PDPrefixStatus`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_HashMap_String_Option_LDIAPrefix`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_HashMap_String_ServiceStatus`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_IPV6PDServiceConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_ServiceStatus`

- `args`: object
- `data`: t=staring | t=running | t=stopping | t=stop | t=failed | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_IPV6PDServiceConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string
