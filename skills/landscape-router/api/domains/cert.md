# cert

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/cert/accounts

- operationId: `list_cert_accounts`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `CertAccountConfig`[]

- `account_private_key`: string
- `acme_account_url`: string
- `email`: string (required)
- `id`: string
- `name`: string (required)
- `provider_config`: ProviderConfig
- `status`: AccountStatus
- `status_message`: string
- `terms_agreed`: boolean
- `update_at`: number
- `use_staging`: boolean

> 外层包装 `LandscapeApiResp_Vec_CertAccountConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/cert/accounts

- operationId: `create_cert_account`

**参数**

> 无

**请求体**

- `account_private_key`: string
- `acme_account_url`: string
- `email`: string (required)
- `id`: string
- `name`: string (required)
- `provider_config`: ProviderConfig
- `status`: AccountStatus
- `status_message`: string
- `terms_agreed`: boolean
- `update_at`: number
- `use_staging`: boolean

**响应 data**

- `account_private_key`: string
- `acme_account_url`: string
- `email`: string (required)
- `id`: string
- `name`: string (required)
- `provider_config`: ProviderConfig
- `status`: AccountStatus
- `status_message`: string
- `terms_agreed`: boolean
- `update_at`: number
- `use_staging`: boolean

> 外层包装 `LandscapeApiResp_CertAccountConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/cert/accounts/{id}

- operationId: `get_cert_account`

**参数**

- `id` (path): string (required) — Certificate account ID

**请求体**

> 无

**响应 data**

- `account_private_key`: string
- `acme_account_url`: string
- `email`: string (required)
- `id`: string
- `name`: string (required)
- `provider_config`: ProviderConfig
- `status`: AccountStatus
- `status_message`: string
- `terms_agreed`: boolean
- `update_at`: number
- `use_staging`: boolean

> 外层包装 `LandscapeApiResp_CertAccountConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/cert/accounts/{id}

- operationId: `delete_cert_account`

**参数**

- `id` (path): string (required) — Certificate account ID

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/cert/accounts/{id}/deactivate

- operationId: `deactivate_cert_account`

**参数**

- `id` (path): string (required) — Certificate account ID

**请求体**

> 无

**响应 data**

- `account_private_key`: string
- `acme_account_url`: string
- `email`: string (required)
- `id`: string
- `name`: string (required)
- `provider_config`: ProviderConfig
- `status`: AccountStatus
- `status_message`: string
- `terms_agreed`: boolean
- `update_at`: number
- `use_staging`: boolean

> 外层包装 `LandscapeApiResp_CertAccountConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/cert/accounts/{id}/register

- operationId: `register_cert_account`

**参数**

- `id` (path): string (required) — Certificate account ID

**请求体**

> 无

**响应 data**

- `account_private_key`: string
- `acme_account_url`: string
- `email`: string (required)
- `id`: string
- `name`: string (required)
- `provider_config`: ProviderConfig
- `status`: AccountStatus
- `status_message`: string
- `terms_agreed`: boolean
- `update_at`: number
- `use_staging`: boolean

> 外层包装 `LandscapeApiResp_CertAccountConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/cert/accounts/{id}/verify

- operationId: `verify_cert_account`

**参数**

- `id` (path): string (required) — Certificate account ID

**请求体**

> 无

**响应 data**

- `account_private_key`: string
- `acme_account_url`: string
- `email`: string (required)
- `id`: string
- `name`: string (required)
- `provider_config`: ProviderConfig
- `status`: AccountStatus
- `status_message`: string
- `terms_agreed`: boolean
- `update_at`: number
- `use_staging`: boolean

> 外层包装 `LandscapeApiResp_CertAccountConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/cert/certs

- operationId: `list_certs`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `CertConfig`[]

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_CertConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/cert/certs

- operationId: `create_cert`

**参数**

> 无

**请求体**

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number

**响应 data**

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_CertConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/cert/certs/{id}

- operationId: `get_cert`

**参数**

- `id` (path): string (required) — Certificate ID

**请求体**

> 无

**响应 data**

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_CertConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/cert/certs/{id}

- operationId: `delete_cert`

**参数**

- `id` (path): string (required) — Certificate ID

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/cert/certs/{id}/cancel

- operationId: `cancel_cert`

**参数**

- `id` (path): string (required) — Certificate ID

**请求体**

> 无

**响应 data**

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_CertConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/cert/certs/{id}/info

- operationId: `get_cert_info`

**参数**

- `id` (path): string (required) — Certificate ID

**请求体**

> 无

**响应 data**

- `fingerprint_sha256`: string (required)
- `issuer`: string (required)
- `not_after`: number (required)
- `not_before`: number (required)
- `serial_number`: string (required)
- `signature_algorithm`: string (required)
- `subject`: string (required)
- `subject_alt_names`: string[] (required)

> 外层包装 `LandscapeApiResp_CertParsedInfo`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/cert/certs/{id}/issue

- operationId: `issue_cert`

**参数**

- `id` (path): string (required) — Certificate ID

**请求体**

> 无

**响应 data**

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_CertConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/cert/certs/{id}/renew

- operationId: `renew_cert`

**参数**

- `id` (path): string (required) — Certificate ID

**请求体**

> 无

**响应 data**

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_CertConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/cert/certs/{id}/revoke

- operationId: `revoke_cert`

**参数**

- `id` (path): string (required) — Certificate ID

**请求体**

> 无

**响应 data**

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_CertConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

## Schema


#### `AccountStatus`

> 类型: `unregistered` | `registering` | `registered` | `error`


#### `AcmeCertConfig`

- `account_id`: string (required)
- `acme_order_url`: string
- `auto_renew`: boolean
- `challenge_type`: ChallengeType
- `key_type`: KeyType
- `renew_before_days`: integer


#### `CertAccountConfig`

- `account_private_key`: string
- `acme_account_url`: string
- `email`: string (required)
- `id`: string
- `name`: string (required)
- `provider_config`: ProviderConfig
- `status`: AccountStatus
- `status_message`: string
- `terms_agreed`: boolean
- `update_at`: number
- `use_staging`: boolean


#### `CertConfig`

- `cert_type`: CertType
- `certificate`: string
- `certificate_chain`: string
- `domains`: string[] (required)
- `expires_at`: number
- `for_api`: boolean
- `for_gateway`: boolean
- `id`: string
- `issued_at`: number
- `name`: string (required)
- `private_key`: string
- `status`: CertStatus
- `status_message`: string
- `update_at`: number


#### `CertStatus`

> 类型: `pending` | `ready` | `processing` | `cancelled` | `valid` | `invalid` | `expired` | `revoked`


#### `CertType`

> 变体: AcmeCertConfig | GeneratedCertConfig | t=manual


#### `ChallengeType`

> 变体: object(http) | object(dns)


#### `GeneratedCertConfig`

- `validity_days`: integer


#### `KeyType`

> 类型: `ecdsa_p256` | `ecdsa_p384` | `rsa2048` | `rsa4096`


#### `LandscapeApiResp_CertAccountConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_CertConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_CertParsedInfo`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_CertAccountConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_CertConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `ProviderConfig`

> 变体: string | object(zero_ssl)
