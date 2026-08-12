# geo

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/geo/ips

- operationId: `get_geo_ips`

**参数**

- `name` (query): string — Filter by name

**请求体**

> 无

**响应 data**

> 数组: `GeoIpSourceConfig`[]

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoIpSource (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_GeoIpSourceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/geo/ips

- operationId: `add_geo_ip`

**参数**

> 无

**请求体**

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoIpSource (required)
- `update_at`: number

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoIpSource (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_GeoIpSourceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/geo/ips/batch

- operationId: `add_many_geo_ips`

**参数**

> 无

**请求体**

> 类型: GeoIpSourceConfig[]

**响应 data**

> 未定义

### GET /api/v1/geo/ips/cache

- operationId: `get_geo_ip_cache`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `GeoFileCacheKey`[]

- `key`: string (required)
- `name`: string (required)

> 外层包装 `LandscapeApiResp_Vec_GeoFileCacheKey`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/geo/ips/cache

- operationId: `refresh_geo_ip_cache`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/geo/ips/cache/detail

- operationId: `get_geo_ip_cache_detail`

**参数**

- `name` (query): string (required) — Geo file name
- `key` (query): string (required) — Geo cache key

**请求体**

> 无

**响应 data**

- `key`: string (required)
- `name`: string (required)
- `values`: IpConfig[] (required)

> 外层包装 `LandscapeApiResp_GeoIpConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/geo/ips/cache/search

- operationId: `search_geo_ip_cache`

**参数**

- `name` (query): string — Filter by name
- `key` (query): string — Filter by key

**请求体**

> 无

**响应 data**

> 数组: `GeoFileCacheKey`[]

- `key`: string (required)
- `name`: string (required)

> 外层包装 `LandscapeApiResp_Vec_GeoFileCacheKey`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/geo/ips/{id}

- operationId: `get_geo_ip_rule`

**参数**

- `id` (path): string (required) — Geo IP rule ID

**请求体**

> 无

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoIpSource (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_GeoIpSourceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/geo/ips/{id}

- operationId: `del_geo_ip`

**参数**

- `id` (path): string (required) — Geo IP rule ID

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/geo/ips/{name}/update_by_upload

- operationId: `update_geo_ip_by_upload`

**参数**

- `name` (path): string (required) — Geo IP config name

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/geo/sites

- operationId: `get_geo_sites`

**参数**

- `name` (query): string — Filter by name

**请求体**

> 无

**响应 data**

> 数组: `GeoSiteSourceConfig`[]

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoSiteSource (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_GeoSiteSourceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/geo/sites

- operationId: `add_geo_site`

**参数**

> 无

**请求体**

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoSiteSource (required)
- `update_at`: number

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoSiteSource (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_GeoSiteSourceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/geo/sites/batch

- operationId: `add_many_geo_sites`

**参数**

> 无

**请求体**

> 类型: GeoSiteSourceConfig[]

**响应 data**

> 未定义

### GET /api/v1/geo/sites/cache

- operationId: `get_geo_site_cache`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `GeoFileCacheKey`[]

- `key`: string (required)
- `name`: string (required)

> 外层包装 `LandscapeApiResp_Vec_GeoFileCacheKey`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/geo/sites/cache

- operationId: `refresh_geo_site_cache`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/geo/sites/cache/detail

- operationId: `get_geo_site_cache_detail`

**参数**

- `name` (query): string (required) — Geo file name
- `key` (query): string (required) — Geo cache key

**请求体**

> 无

**响应 data**

- `key`: string (required)
- `name`: string (required)
- `values`: GeoSiteFileConfig[] (required)

> 外层包装 `LandscapeApiResp_GeoDomainConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/geo/sites/cache/search

- operationId: `search_geo_site_cache`

**参数**

- `name` (query): string — Filter by name
- `key` (query): string — Filter by key

**请求体**

> 无

**响应 data**

> 数组: `GeoFileCacheKey`[]

- `key`: string (required)
- `name`: string (required)

> 外层包装 `LandscapeApiResp_Vec_GeoFileCacheKey`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/geo/sites/{id}

- operationId: `get_geo_rule`

**参数**

- `id` (path): string (required) — Geo site rule ID

**请求体**

> 无

**响应 data**

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoSiteSource (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_GeoSiteSourceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/geo/sites/{id}

- operationId: `del_geo_site`

**参数**

- `id` (path): string (required) — Geo site rule ID

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/geo/sites/{name}/refresh

- operationId: `refresh_geo_site_config_by_name`

**参数**

- `name` (path): string (required) — Geo site config name

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/geo/sites/{name}/update_by_upload

- operationId: `update_geo_site_by_upload`

**参数**

- `name` (path): string (required) — Geo site config name

**请求体**

> 无

**响应 data**

> 未定义

## Schema


#### `DomainMatchType`

> 类型: `plain` | `regex` | `domain` | `full`


#### `GeoIpDirectItem`

- `key`: string (required)
- `values`: IpConfig[] (required)


#### `GeoIpFileFormat`

> 类型: `dat` | `txt`


#### `GeoIpSource`

> 变体: t=url | t=direct


#### `GeoIpSourceConfig`

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoIpSource (required)
- `update_at`: number


#### `GeoSiteDirectItem`

- `key`: string (required)
- `values`: GeoSiteFileConfig[] (required)


#### `GeoSiteFileConfig`

- `attributes`: string[] (required)
- `match_type`: DomainMatchType (required)
- `value`: string (required)


#### `GeoSiteSource`

> 变体: t=url | t=direct | t=adguard_home


#### `GeoSiteSourceConfig`

- `enable`: boolean (required)
- `id`: string
- `name`: string (required)
- `source`: GeoSiteSource (required)
- `update_at`: number


#### `IpConfig`

- `ip`: string (required)
- `prefix`: integer (required)


#### `LandscapeApiResp_GeoDomainConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GeoIpConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GeoIpSourceConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_GeoSiteSourceConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_GeoFileCacheKey`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_GeoIpSourceConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_GeoSiteSourceConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string
