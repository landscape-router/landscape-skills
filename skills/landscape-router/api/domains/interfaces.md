# interfaces

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/interfaces/all

- operationId: `get_ifaces_new`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `managed`: IfaceInfo[] (required)
- `unmanaged`: RawIfaceInfo[] (required)

> 外层包装 `LandscapeApiResp_IfacesInfo`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/interfaces/all_old

- operationId: `get_ifaces_old`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `IfaceTopology`[]

- `controller_name`: string,null
- `create_dev_type`: CreateDevType (required)
- `enable_in_boot`: boolean (required)
- `name`: string (required)
- `update_at`: number
- `wifi_mode`: WifiMode (required)
- `xps_rps`: IfaceCpuSoftBalance | null (required)
- `zone_type`: IfaceZoneType (required)
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
- `wifi_info`: LandscapeWifiInterface

> 外层包装 `LandscapeApiResp_Vec_IfaceTopology`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/interfaces/bridge

- operationId: `create_bridge`

**参数**

> 无

**请求体**

- `name`: string (required)

**响应 data**

> 未定义

### DELETE /api/v1/interfaces/bridge/{bridge_name}

- operationId: `delete_bridge`

**参数**

- `bridge_name` (path): string (required) — Bridge name

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/interfaces/controller

- operationId: `set_controller`

**参数**

> 无

**请求体**

- `link_ifindex`: integer (required)
- `link_name`: string (required)
- `master_ifindex`: integer,null (required)
- `master_name`: string,null (required)

**响应 data**

> 未定义

### POST /api/v1/interfaces/manage/{iface_name}

- operationId: `manage_iface`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/interfaces/wan_candidates

- operationId: `get_wan_candidates`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Vec_String`

### GET /api/v1/interfaces/wan_configs

- operationId: `get_wan_ifaces`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `NetworkIfaceConfig`[]

- `controller_name`: string,null
- `create_dev_type`: CreateDevType (required)
- `enable_in_boot`: boolean (required)
- `name`: string (required)
- `update_at`: number
- `wifi_mode`: WifiMode (required)
- `xps_rps`: IfaceCpuSoftBalance | null (required)
- `zone_type`: IfaceZoneType (required)

> 外层包装 `LandscapeApiResp_Vec_NetworkIfaceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/interfaces/zone

- operationId: `change_zone`

**参数**

> 无

**请求体**

- `iface_name`: string (required)
- `zone`: IfaceZoneType (required)

**响应 data**

> 未定义

### POST /api/v1/interfaces/{iface_name}/boot/{status}

- operationId: `change_dev_boot_status`

**参数**

- `iface_name` (path): string (required) — Interface name
- `status` (path): boolean (required) — Enable in boot

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/interfaces/{iface_name}/cpu_balance

- operationId: `get_cpu_balance`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_IfaceCpuSoftBalance`

### POST /api/v1/interfaces/{iface_name}/cpu_balance

- operationId: `set_cpu_balance`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 变体: null | IfaceCpuSoftBalance

**响应 data**

> 未定义

### POST /api/v1/interfaces/{iface_name}/status/{status}

- operationId: `change_dev_status`

**参数**

- `iface_name` (path): string (required) — Interface name
- `status` (path): boolean (required) — Enable in boot

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/interfaces/{iface_name}/wifi_mode/{mode}

- operationId: `change_wifi_mode`

**参数**

- `iface_name` (path): string (required) — Interface name
- `mode` (path): WifiMode (required) — WiFi mode

**请求体**

> 无

**响应 data**

> 未定义

## Schema


#### `AddController`

- `link_ifindex`: integer (required)
- `link_name`: string (required)
- `master_ifindex`: integer,null (required)
- `master_name`: string,null (required)


#### `BridgeCreate`

- `name`: string (required)


#### `ChangeZone`

- `iface_name`: string (required)
- `zone`: IfaceZoneType (required)


#### `CreateDevType`

> 类型: `no_need_to_create` | `bridge`


#### `DevState`

> 变体: t=unknown | t=notpresent | t=down | t=lowerlayerdown | t=testing | t=dormant | t=up | t=other


#### `DeviceKind`
> 设备类型小类

> 变体: string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | string | object(other) | string


#### `DeviceType`
> 设备类型大类

> 类型: `unsupport` | `loopback` | `ethernet` | `ppp` | `tunnel` | `tunnel6` — 设备类型大类


#### `IfaceCpuSoftBalance`

- `rps`: string (required)
- `xps`: string (required)


#### `IfaceInfo`

- `config`: NetworkIfaceConfig (required)
- `status`: LandscapeInterface
- `wifi_info`: LandscapeWifiInterface


#### `IfaceZoneType`

> 类型: `undefined` | `wan` | `lan`


#### `LandscapeApiResp_IfacesInfo`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_IfaceCpuSoftBalance`

- `args`: object
- `data`: object | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_IfaceTopology`

- `args`: object
- `data`: NetworkIfaceConfig + LandscapeInterface + object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_NetworkIfaceConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_String`

- `args`: object
- `data`: string[]
- `error_id`: string
- `message`: string


#### `LandscapeInterface`
> 当前硬件状态结构体

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


#### `LandscapeWifiInterface`
> 当前硬件状态结构体

- `index`: integer (required)
- `name`: string (required)
- `wifi_type`: WLANType (required)


#### `NetworkIfaceConfig`

- `controller_name`: string,null
- `create_dev_type`: CreateDevType (required)
- `enable_in_boot`: boolean (required)
- `name`: string (required)
- `update_at`: number
- `wifi_mode`: WifiMode (required)
- `xps_rps`: IfaceCpuSoftBalance | null (required)
- `zone_type`: IfaceZoneType (required)


#### `RawIfaceInfo`

- `status`: LandscapeInterface (required)
- `wifi_info`: LandscapeWifiInterface


#### `WLANType`
> 无线接口类型

> 变体: t=Unspecified | t=Adhoc | t=Station | t=Ap | t=ApVlan | t=Wds | t=Monitor | t=MeshPoint | t=P2pClient | t=P2pGo | t=P2pDevice | t=Ocb | t=Nan | t=Other


#### `WifiMode`

> 类型: `undefined` | `client` | `ap`
