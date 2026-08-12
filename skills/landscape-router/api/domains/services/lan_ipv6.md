# Services: lan_ipv6.md

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/services/lan_ipv6

- operationId: `get_all_lan_ipv6_configs`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `LanIPv6ServiceConfigV2`[]

- `config`: LanIPv6ConfigV2 (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_LanIPv6ServiceConfigV2`: `data` 即上表;另有 `message`/`error_id`/`args`

### PUT /api/v1/services/lan_ipv6

- operationId: `handle_lan_ipv6`

**参数**

> 无

**请求体**

- `config`: LanIPv6ConfigV2 (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number

**响应 data**

> 未定义

### GET /api/v1/services/lan_ipv6/assigned_ips

- operationId: `get_all_lan_ipv6_assigned_ips`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_IPv6NAInfo`

### GET /api/v1/services/lan_ipv6/dhcpv6_assigned

- operationId: `get_all_lan_ipv6_dhcpv6_assigned`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_DHCPv6OfferInfo`

### GET /api/v1/services/lan_ipv6/status

- operationId: `get_all_lan_ipv6_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_ServiceStatus`

### GET /api/v1/services/lan_ipv6/{iface_name}

- operationId: `get_lan_ipv6_config`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

- `config`: LanIPv6ConfigV2 (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_LanIPv6ServiceConfigV2`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/services/lan_ipv6/{iface_name}

- operationId: `delete_and_stop_lan_ipv6`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_ServiceStatus`

### GET /api/v1/services/lan_ipv6/{iface_name}/assigned_ips

- operationId: `get_lan_ipv6_assigned_ips_by_iface_name`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_IPv6NAInfo`

### GET /api/v1/services/lan_ipv6/{iface_name}/dhcpv6_assigned

- operationId: `get_lan_ipv6_dhcpv6_assigned_by_iface_name`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_DHCPv6OfferInfo`

## Schema


#### `DHCPv6AddressItem`

- `duid`: string
- `hostname`: string
- `ip`: string (required)
- `is_static`: boolean (required)
- `mac`: MacAddr
- `preferred_lifetime`: integer (required)
- `prev_suffix`: integer
- `relative_active_time`: integer (required)
- `valid_lifetime`: integer (required)


#### `DHCPv6IANAConfig`
> IA_NA config — address assignment parameters.
Prefixes come from prefix groups with an NA configuration.

- `max_prefix_len`: integer (required) — Max prefix length to qualify (e.g., 64 means prefixes with len <= 64 are used).
- `pool_end`: integer — Host part range end (exclusive; defaults to pool_start + 65535)
- `pool_start`: integer (required) — Host part range start (suffix value, e.g., 0x100 = 256)
- `preferred_lifetime`: integer — Legacy preferred lifetime (seconds), default: 300.
- `valid_lifetime`: integer — Legacy valid lifetime (seconds), default: 600.


#### `DHCPv6IAPDConfig`
> IA_PD config — prefix delegation parameters.
`delegate_prefix_len` sets the minimum network size for qualifying pool blocks:
only blocks whose `prefix_len <= delegate_prefix_len` (i.e. at least as large as a /N network)
enter the pool. The actual delegated prefix length in the DHCPv6 response is determined
by the pool block's own `PdPrefixRangeConfig.pool_len`.
Prefixes come from prefix groups with a PD configuration.

- `delegate_prefix_len`: integer (required) — Minimum network size for qualifying PD pool blocks (upper bound on prefix_len). Blocks with prefix_len > this value (i.e. smaller networks) are excluded. Example: setting /56 means /48 and /56 blocks qualify, but /60 does not. The actual delegated prefix length is taken from the block's own config.
- `preferred_lifetime`: integer — Legacy preferred lifetime (seconds), default: 300.
- `valid_lifetime`: integer — Legacy valid lifetime (seconds), default: 600.


#### `DHCPv6PrefixItem`

- `duid`: string
- `preferred_lifetime`: integer (required)
- `prefix`: string (required)
- `prefix_len`: integer (required)
- `relative_active_time`: integer (required)
- `valid_lifetime`: integer (required)


#### `DHCPv6ServerConfig`
> DHCPv6 server config — parameters only.
Prefix pools are defined in LanIPv6ConfigV2.prefix_groups.

- `enable`: boolean (required)
- `ia_na`: DHCPv6IANAConfig — IA_NA: stateful address assignment
- `ia_pd`: DHCPv6IAPDConfig — IA_PD: prefix delegation to downstream routers


#### `IPv6NAInfoItem`

- `ip`: string (required)
- `mac`: MacAddr (required)
- `relative_active_time`: integer (required) — Relative to the start time of RA


#### `IPv6ServiceMode`

> 类型: `slaac` | `stateful` | `slaac_dhcpv6`


#### `LanIPv6ConfigV2`

- `ad_interval`: integer
- `dhcpv6`: DHCPv6ServerConfig
- `lifetime`: integer
- `mode`: IPv6ServiceMode (required)
- `prefix_groups`: LanPrefixGroupConfig[]
- `ra_flag`: RouterFlags (required)


#### `LanIPv6ServiceConfigV2`

- `config`: LanIPv6ConfigV2 (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number


#### `LanPrefixGroupConfig`

- `group_id`: string (required)
- `na`: NaPrefixConfig | null
- `parent`: PrefixParentSource (required)
- `pd`: PdPrefixRangeConfig | null
- `ra`: RaPrefixConfig | null


#### `LandscapeApiResp_HashMap_String_DHCPv6OfferInfo`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_HashMap_String_IPv6NAInfo`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_HashMap_String_ServiceStatus`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_LanIPv6ServiceConfigV2`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_DHCPv6OfferInfo`

- `args`: object
- `data`: object | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_IPv6NAInfo`

- `args`: object
- `data`: object | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_ServiceStatus`

- `args`: object
- `data`: t=staring | t=running | t=stopping | t=stop | t=failed | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_LanIPv6ServiceConfigV2`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `MacAddr`

> 类型: string[]


#### `NaPrefixConfig`

- `pool_index`: integer (required)


#### `PdPrefixRangeConfig`

- `end_index`: integer (required)
- `pool_len`: integer (required)
- `start_index`: integer (required)


#### `PrefixParentSource`

> 变体: t=static | t=pd


#### `RaPrefixConfig`

- `pool_index`: integer (required)
- `preferred_lifetime`: integer
- `valid_lifetime`: integer


#### `RouterFlags`

- `home_agent`: boolean (required)
- `managed_address_config`: boolean (required)
- `nd_proxy`: boolean (required)
- `other_config`: boolean (required)
- `prf`: integer (required)
- `reserved`: integer (required)
