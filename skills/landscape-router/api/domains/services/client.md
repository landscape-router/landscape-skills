# Services: client.md

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/services/client/caller

- operationId: `get_client_caller`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `hostname`: string
- `iface_name`: string
- `ip`: string (required)
- `ip_version`: CallerIpVersion (required)
- `mac`: MacAddr
- `source`: CallerLookupSource

> 外层包装 `LandscapeApiResp_CallerIdentityResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

## Schema


#### `CallerIpVersion`

> 类型: `ipv4` | `ipv6`


#### `CallerLookupSource`

> 类型: `dhcp_v4` | `arp` | `ipv6_ra` | `dhcp_v6`


#### `LandscapeApiResp_CallerIdentityResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `MacAddr`

> 类型: string[]
