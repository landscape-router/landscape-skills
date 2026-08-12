# system

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/system/config/dns

- operationId: `get_dns_config_fast`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `dns`: LandscapeDnsConfig (required)
- `hash`: string (required)

> 外层包装 `LandscapeApiResp_GetDnsConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/system/config/edit/auth

- operationId: `change_password`

**参数**

> 无

**请求体**

- `confirm_password`: string (required)
- `current_password`: string (required)
- `new_password`: string (required)

**响应 data**

> 未定义

### GET /api/v1/system/config/edit/dns

- operationId: `get_dns_config`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `dns`: LandscapeDnsConfig (required)
- `hash`: string (required)

> 外层包装 `LandscapeApiResp_GetDnsConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/system/config/edit/dns

- operationId: `update_dns_config`

**参数**

> 无

**请求体**

> 类型: any

**响应 data**

> `LandscapeApiResp_String`

### GET /api/v1/system/config/edit/gateway

- operationId: `get_gateway_config`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `gateway`: LandscapeGatewayConfig (required)
- `hash`: string (required)

> 外层包装 `LandscapeApiResp_GetGatewayConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/system/config/edit/gateway

- operationId: `update_gateway_config`

**参数**

> 无

**请求体**

- `expected_hash`: string (required)
- `new_gateway`: LandscapeGatewayConfig (required)

**响应 data**

> 未定义

### GET /api/v1/system/config/edit/lan_hostname

- operationId: `get_lan_hostname_config`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `hash`: string (required)
- `lan_hostname`: LandscapeLanHostnameConfig (required)

> 外层包装 `LandscapeApiResp_GetLanHostnameConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/system/config/edit/lan_hostname

- operationId: `update_lan_hostname_config`

**参数**

> 无

**请求体**

- `expected_hash`: string (required)
- `new_lan_hostname`: LandscapeLanHostnameConfig (required)

**响应 data**

> 未定义

### GET /api/v1/system/config/edit/metric

- operationId: `get_metric_config`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `hash`: string (required)
- `metric`: LandscapeMetricConfig (required)

> 外层包装 `LandscapeApiResp_GetMetricConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/system/config/edit/metric

- operationId: `update_metric_config`

**参数**

> 无

**请求体**

- `expected_hash`: string (required)
- `new_metric`: LandscapeMetricConfig (required)

**响应 data**

> 未定义

### GET /api/v1/system/config/edit/time

- operationId: `get_time_config`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `hash`: string (required)
- `time`: LandscapeTimeConfig (required)

> 外层包装 `LandscapeApiResp_GetTimeConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/system/config/edit/time

- operationId: `update_time_config`

**参数**

> 无

**请求体**

- `expected_hash`: string (required)
- `new_time`: LandscapeTimeConfig (required)

**响应 data**

> 未定义

### GET /api/v1/system/config/edit/ui

- operationId: `get_ui_config`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `hash`: string (required)
- `ui`: LandscapeUIConfig (required)

> 外层包装 `LandscapeApiResp_GetUIConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/system/config/edit/ui

- operationId: `update_ui_config`

**参数**

> 无

**请求体**

- `expected_hash`: string (required)
- `new_ui`: LandscapeUIConfig (required)

**响应 data**

> 未定义

### GET /api/v1/system/config/export

- operationId: `export_init_config`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `content`: string (required)
- `filename`: string (required)
- `version`: string (required)

> 外层包装 `LandscapeApiResp_ExportInitConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/config/gateway

- operationId: `get_gateway_config_fast`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `enable`: boolean
- `http_port`: integer
- `https_port`: integer

> 外层包装 `LandscapeApiResp_LandscapeGatewayConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/system/config/import

- operationId: `import_init_config`

**参数**

- `upload_only` (query): boolean

**请求体**

> 无

**响应 data**

- `filename`: string,null
- `upload_only`: boolean (required)
- `version`: string (required)

> 外层包装 `LandscapeApiResp_ImportInitConfigResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/config/lan_hostname

- operationId: `get_lan_hostname_config_fast`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `enable`: boolean
- `lan_suffix`: string

> 外层包装 `LandscapeApiResp_LandscapeLanHostnameConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/config/metric

- operationId: `get_metric_config_fast`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `cleanup_interval_secs`: integer
- `cleanup_slice_window_secs`: integer
- `cleanup_time_budget_ms`: integer
- `connect_1d_retention_days`: integer
- `connect_1h_retention_days`: integer
- `connect_1m_retention_days`: integer
- `connect_second_window_minutes`: integer
- `db_max_memory_mb`: integer
- `db_max_threads`: integer
- `dns_retention_days`: integer
- `mode`: MetricMode
- `write_batch_size`: integer
- `write_flush_interval_secs`: integer

> 外层包装 `LandscapeApiResp_LandscapeMetricConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/config/time

- operationId: `get_time_config_fast`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `enabled`: boolean
- `samples_per_server`: integer
- `servers`: string[]
- `step_threshold_ms`: integer
- `sync_interval_secs`: integer
- `timeout_secs`: integer

> 外层包装 `LandscapeApiResp_LandscapeTimeConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/config/ui

- operationId: `get_ui_config_fast`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `language`: string
- `theme`: string
- `timezone`: string

> 外层包装 `LandscapeApiResp_LandscapeUIConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/info

- operationId: `get_basic_sys_info`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `cpu_arch`: string (required) — CPU Architecture
- `host_name`: string — Hostname
- `kernel_version`: string — Kernel Version
- `landscape_version`: string (required) — Landscape Version
- `os_version`: string — OS Version
- `start_at`: integer (required) — System Start Time (Timestamp)
- `system_name`: string — System Name (e.g., Linux)

> 外层包装 `LandscapeApiResp_LandscapeSystemInfo`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/info/cpu_count

- operationId: `get_cpu_count`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_usize`

### GET /api/v1/system/info/interval

- operationId: `get_interval_fetch_info`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `cpus`: CpuUsage[] (required) — Per-CPU Usage Information
- `global_cpu_info`: number (required) — Global CPU Usage Percentage
- `global_cpu_temp`: number — Global/Package CPU Temperature in Celsius
- `load_avg`: LoadAvg (required) — Load Average Information
- `mem`: MemUsage (required) — Memory Usage Information
- `uptime`: integer (required) — System Uptime in Seconds

> 外层包装 `LandscapeApiResp_LandscapeStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/info/net_dev

- operationId: `get_net_dev`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `LandscapeInterface`[]

- `carrier`: boolean (required)
- `controller_id`: integer
- `dev_kind`: DeviceKind (required)
- `dev_status`: DevState (required)
- `dev_type`: DeviceType (required)
- `iface_name`: string (required)
- `index`: integer (required)
- `is_wireless`: boolean (required)
- `mac`: string
- `netns_id`: integer
- `peer_link_id`: integer
- `perm_mac`: string

> 外层包装 `LandscapeApiResp_Vec_LandscapeInterface`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/info/xdp_redirect_able

- operationId: `get_xdp_redirect_able_all`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `XdpRedirectAbleInfo`[]

- `ifname`: string (required)
- `redirect_able`: boolean (required)

> 外层包装 `LandscapeApiResp_Vec_XdpRedirectAbleInfo`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/info/xdp_redirect_able/{ifname}

- operationId: `get_xdp_redirect_able`

**参数**

- `ifname` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

- `ifname`: string (required)
- `redirect_able`: boolean (required)

> 外层包装 `LandscapeApiResp_XdpRedirectAbleInfo`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/system/time/sync_status

- operationId: `get_time_sync_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `current_source`: string (required)
- `enabled`: boolean (required)
- `last_action`: string (required)
- `last_attempt_at`: number,null
- `last_delay_ms`: number,null
- `last_error`: string,null
- `last_offset_ms`: number,null
- `last_server`: string,null
- `last_success_at`: number,null
- `last_system_clock_update_at`: number,null
- `next_attempt_in_secs`: integer,null
- `running`: boolean (required)
- `selected_sample_count`: integer,null
- `sync_stage`: string (required)
- `system_clock_synced`: boolean (required)

> 外层包装 `LandscapeApiResp_TimeSyncStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

## Schema


#### `ChangePasswordRequest`

- `confirm_password`: string (required)
- `current_password`: string (required)
- `new_password`: string (required)


#### `CpuUsage`
> CPU Usage Information

- `brand`: string (required) — Brand
- `frequency`: integer (required) — Frequency in MHz
- `name`: string (required) — CPU Name
- `temperature`: number — Temperature in Celsius (Optional)
- `usage`: number (required) — CPU Usage Percentage
- `vendor_id`: string (required) — Vendor ID


#### `DevState`

> 变体: t=unknown | t=notpresent | t=down | t=lowerlayerdown | t=testing | t=dormant | t=up | t=other


#### `DeviceKind`
> 设备类型小类

> 变体: string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | object(other) | string


#### `DeviceType`
> 设备类型大类

> 类型: `unsupport` | `loopback` | `ethernet` | `ppp` | `tunnel` | `tunnel6` — 设备类型大类


#### `LandscapeApiResp_ExportInitConfigResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GetDnsConfigResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GetGatewayConfigResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GetLanHostnameConfigResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GetMetricConfigResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GetTimeConfigResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GetUIConfigResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_ImportInitConfigResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_LandscapeGatewayConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_LandscapeLanHostnameConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_LandscapeMetricConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_LandscapeStatus`

- `args`: object
- `data`: object — Landscape Runtime Status
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_LandscapeSystemInfo`

- `args`: object
- `data`: object — System Basic Information
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_LandscapeTimeConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_LandscapeUIConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_String`

- `args`: object
- `data`: string
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_TimeSyncStatus`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_LandscapeInterface`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_XdpRedirectAbleInfo`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_XdpRedirectAbleInfo`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_usize`

- `args`: object
- `data`: integer
- `error_id`: string
- `message`: string


#### `LandscapeDnsConfig`

- `cache_capacity`: integer
- `cache_ttl`: integer
- `doh_http_endpoint`: string
- `doh_listen_port`: integer
- `negative_cache_ttl`: integer


#### `LandscapeGatewayConfig`

- `enable`: boolean
- `http_port`: integer
- `https_port`: integer


#### `LandscapeLanHostnameConfig`

- `enable`: boolean
- `lan_suffix`: string


#### `LandscapeMetricConfig`

- `cleanup_interval_secs`: integer
- `cleanup_slice_window_secs`: integer
- `cleanup_time_budget_ms`: integer
- `connect_1d_retention_days`: integer
- `connect_1h_retention_days`: integer
- `connect_1m_retention_days`: integer
- `connect_second_window_minutes`: integer
- `db_max_memory_mb`: integer
- `db_max_threads`: integer
- `dns_retention_days`: integer
- `mode`: MetricMode
- `write_batch_size`: integer
- `write_flush_interval_secs`: integer


#### `LandscapeTimeConfig`

- `enabled`: boolean
- `samples_per_server`: integer
- `servers`: string[]
- `step_threshold_ms`: integer
- `sync_interval_secs`: integer
- `timeout_secs`: integer


#### `LandscapeUIConfig`

- `language`: string
- `theme`: string
- `timezone`: string


#### `LoadAvg`
> System Load Average

- `fifteen`: number (required) — Average load within fifteen minutes.
- `five`: number (required) — Average load within five minutes.
- `one`: number (required) — Average load within one minute.


#### `MemUsage`
> Memory Usage Information

- `total_mem`: integer (required) — Total Memory in Bytes
- `total_swap`: integer (required) — Total Swap in Bytes
- `used_mem`: integer (required) — Used Memory in Bytes
- `used_swap`: integer (required) — Used Swap in Bytes


#### `MetricMode`

> 类型: `off` | `memory` | `duckdb`


#### `UpdateGatewayConfigRequest`

- `expected_hash`: string (required)
- `new_gateway`: LandscapeGatewayConfig (required)


#### `UpdateLanHostnameConfigRequest`

- `expected_hash`: string (required)
- `new_lan_hostname`: LandscapeLanHostnameConfig (required)


#### `UpdateMetricConfigRequest`

- `expected_hash`: string (required)
- `new_metric`: LandscapeMetricConfig (required)


#### `UpdateTimeConfigRequest`

- `expected_hash`: string (required)
- `new_time`: LandscapeTimeConfig (required)


#### `UpdateUIConfigRequest`

- `expected_hash`: string (required)
- `new_ui`: LandscapeUIConfig (required)
