# auth

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### POST /api/auth/login

- operationId: `login_handler`

**参数**

> 无

**请求体**

- `password`: string (required)
- `username`: string (required)

**响应 data**

- `success`: boolean (required)
- `token`: string (required)

> 外层包装 `LandscapeApiResp_LoginResult`: `data` 即上表;另有 `message`/`error_id`/`args`

## Schema


#### `LandscapeApiResp_LoginResult`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LoginInfo`

- `password`: string (required)
- `username`: string (required)
