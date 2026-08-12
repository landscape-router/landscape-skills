# nat

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/nat/static_mappings/v4

- operationId: `get_static_nat_mappings_v4`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `StaticNatMappingV4Config`[]

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV4Target | null
- `mapping_pair_ports`: StaticMapPair[] (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)

> 外层包装 `LandscapeApiResp_Vec_StaticNatMappingV4Config`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/nat/static_mappings/v4

- operationId: `add_static_nat_mapping_v4`

**参数**

> 无

**请求体**

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV4Target | null
- `mapping_pair_ports`: StaticMapPair[] (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV4Target | null
- `mapping_pair_ports`: StaticMapPair[] (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)

> 外层包装 `LandscapeApiResp_StaticNatMappingV4Config`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/nat/static_mappings/v4/batch

- operationId: `add_many_static_nat_mappings_v4`

**参数**

> 无

**请求体**

> 类型: StaticNatMappingV4Config[]

**响应 data**

> 未定义

### GET /api/v1/nat/static_mappings/v4/check-conflict

- operationId: `check_static_nat_v4_conflict`

**参数**

- `wan_port` (query): integer (required) — WAN port to check for dynamic range conflict
- `protocols` (query): string (required) — Comma-separated protocol numbers (6=TCP, 17=UDP)

**请求体**

> 无

**响应 data**

- `conflict`: boolean (required)
- `end`: integer,null
- `iface_name`: string,null
- `port`: integer,null
- `protocol`: integer,null
- `start`: integer,null

> 外层包装 `LandscapeApiResp_PortConflictCheckResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/nat/static_mappings/v4/{id}

- operationId: `get_static_nat_mapping_v4`

**参数**

- `id` (path): string (required) — Static NAT mapping v4 ID

**请求体**

> 无

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV4Target | null
- `mapping_pair_ports`: StaticMapPair[] (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)

> 外层包装 `LandscapeApiResp_StaticNatMappingV4Config`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/nat/static_mappings/v4/{id}

- operationId: `del_static_nat_mapping_v4`

**参数**

- `id` (path): string (required) — Static NAT mapping v4 ID

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/nat/static_mappings/v6

- operationId: `get_static_nat_mappings_v6`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `StaticNatMappingV6Config`[]

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV6Target | null
- `port_config`: StaticNatV6PortConfig (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)

> 外层包装 `LandscapeApiResp_Vec_StaticNatMappingV6Config`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/nat/static_mappings/v6

- operationId: `add_static_nat_mapping_v6`

**参数**

> 无

**请求体**

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV6Target | null
- `port_config`: StaticNatV6PortConfig (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV6Target | null
- `port_config`: StaticNatV6PortConfig (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)

> 外层包装 `LandscapeApiResp_StaticNatMappingV6Config`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/nat/static_mappings/v6/batch

- operationId: `add_many_static_nat_mappings_v6`

**参数**

> 无

**请求体**

> 类型: StaticNatMappingV6Config[]

**响应 data**

> 未定义

### GET /api/v1/nat/static_mappings/v6/{id}

- operationId: `get_static_nat_mapping_v6`

**参数**

- `id` (path): string (required) — Static NAT mapping v6 ID

**请求体**

> 无

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV6Target | null
- `port_config`: StaticNatV6PortConfig (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)

> 外层包装 `LandscapeApiResp_StaticNatMappingV6Config`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/nat/static_mappings/v6/{id}

- operationId: `del_static_nat_mapping_v6`

**参数**

- `id` (path): string (required) — Static NAT mapping v6 ID

**请求体**

> 无

**响应 data**

> 未定义

## Schema


#### `LandscapeApiResp_PortConflictCheckResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_StaticNatMappingV4Config`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_StaticNatMappingV6Config`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_StaticNatMappingV4Config`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_StaticNatMappingV6Config`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `StaticMapPair`

- `lan_port`: integer (required)
- `wan_port`: integer (required)


#### `StaticNatMappingV4Config`

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV4Target | null
- `mapping_pair_ports`: StaticMapPair[] (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)


#### `StaticNatMappingV6Config`

- `enable`: boolean (required)
- `id`: string
- `l4_protocols`: integer[] (required)
- `lan_target`: StaticNatV6Target | null
- `port_config`: StaticNatV6PortConfig (required)
- `remark`: string (required)
- `update_at`: number
- `wan_iface_name`: string,null (required)


#### `StaticNatV4Target`

> 变体: t=address | t=local | t=device


#### `StaticNatV6PortConfig`

> 变体: object(mode) | object(mode, ports)


#### `StaticNatV6Target`

> 变体: t=address | t=local | t=device
