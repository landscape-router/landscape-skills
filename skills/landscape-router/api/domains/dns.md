# dns

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/dns/ddns

- operationId: `list_ddns_jobs`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `DdnsJob`[]

- `enable`: boolean
- `id`: string
- `name`: string (required)
- `provider_profile_id`: string (required)
- `records`: DdnsRecordConfig[]
- `sources`: DdnsSource[] (required)
- `ttl`: integer
- `update_at`: number
- `zone_name`: string (required)

> 外层包装 `LandscapeApiResp_Vec_DdnsJob`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/ddns

- operationId: `create_ddns_job`

**参数**

> 无

**请求体**

- `enable`: boolean
- `id`: string
- `name`: string (required)
- `provider_profile_id`: string (required)
- `records`: DdnsRecordConfig[]
- `sources`: DdnsSource[] (required)
- `ttl`: integer
- `update_at`: number
- `zone_name`: string (required)

**响应 data**

- `enable`: boolean
- `id`: string
- `name`: string (required)
- `provider_profile_id`: string (required)
- `records`: DdnsRecordConfig[]
- `sources`: DdnsSource[] (required)
- `ttl`: integer
- `update_at`: number
- `zone_name`: string (required)

> 外层包装 `LandscapeApiResp_DdnsJob`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/dns/ddns/status

- operationId: `list_ddns_job_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `DdnsJobRuntime`[]

- `job_id`: string (required)
- `last_update_at`: number
- `message`: string
- `next_retry_at`: number
- `reason`: DdnsRuntimeReason (required)
- `records`: DdnsRecordRuntime[] (required)
- `retryable`: boolean
- `status`: DdnsJobStatus (required)

> 外层包装 `LandscapeApiResp_Vec_DdnsJobRuntime`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/dns/ddns/{id}

- operationId: `get_ddns_job`

**参数**

- `id` (path): string (required) — DDNS job ID

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_DdnsJob`

### PUT /api/v1/dns/ddns/{id}

- operationId: `update_ddns_job`

**参数**

- `id` (path): string (required) — DDNS job ID

**请求体**

- `enable`: boolean
- `id`: string
- `name`: string (required)
- `provider_profile_id`: string (required)
- `records`: DdnsRecordConfig[]
- `sources`: DdnsSource[] (required)
- `ttl`: integer
- `update_at`: number
- `zone_name`: string (required)

**响应 data**

- `enable`: boolean
- `id`: string
- `name`: string (required)
- `provider_profile_id`: string (required)
- `records`: DdnsRecordConfig[]
- `sources`: DdnsSource[] (required)
- `ttl`: integer
- `update_at`: number
- `zone_name`: string (required)

> 外层包装 `LandscapeApiResp_DdnsJob`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/dns/ddns/{id}

- operationId: `delete_ddns_job`

**参数**

- `id` (path): string (required) — DDNS job ID

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/dns/ddns/{id}/sync

- operationId: `trigger_ddns_job_sync`

**参数**

- `id` (path): string (required) — DDNS job ID

**请求体**

> 无

**响应 data**

- `job_id`: string (required)
- `last_update_at`: number
- `message`: string
- `next_retry_at`: number
- `reason`: DdnsRuntimeReason (required)
- `records`: DdnsRecordRuntime[] (required)
- `retryable`: boolean
- `status`: DdnsJobStatus (required)

> 外层包装 `LandscapeApiResp_DdnsJobRuntime`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/dns/provider_profiles

- operationId: `list_provider_profiles`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `DnsProviderProfile`[]

- `ddns_default_ttl`: integer
- `id`: string
- `name`: string (required)
- `provider_config`: DnsProviderConfig
- `remark`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_DnsProviderProfile`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/provider_profiles

- operationId: `create_provider_profile`

**参数**

> 无

**请求体**

- `ddns_default_ttl`: integer
- `id`: string
- `name`: string (required)
- `provider_config`: DnsProviderConfig
- `remark`: string
- `update_at`: number

**响应 data**

- `ddns_default_ttl`: integer
- `id`: string
- `name`: string (required)
- `provider_config`: DnsProviderConfig
- `remark`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_DnsProviderProfile`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/provider_profiles/validate

- operationId: `validate_provider_profile`

**参数**

> 无

**请求体**

- `provider_config`: DnsProviderConfig

**响应 data**

- `message`: string (required)

> 外层包装 `LandscapeApiResp_DnsProviderCredentialCheckResult`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/dns/provider_profiles/{id}

- operationId: `get_provider_profile`

**参数**

- `id` (path): string (required) — DNS provider profile ID

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_DnsProviderProfile`

### PUT /api/v1/dns/provider_profiles/{id}

- operationId: `update_provider_profile`

**参数**

- `id` (path): string (required) — DNS provider profile ID

**请求体**

- `ddns_default_ttl`: integer
- `id`: string
- `name`: string (required)
- `provider_config`: DnsProviderConfig
- `remark`: string
- `update_at`: number

**响应 data**

- `ddns_default_ttl`: integer
- `id`: string
- `name`: string (required)
- `provider_config`: DnsProviderConfig
- `remark`: string
- `update_at`: number

> 外层包装 `LandscapeApiResp_DnsProviderProfile`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/dns/provider_profiles/{id}

- operationId: `delete_provider_profile`

**参数**

- `id` (path): string (required) — DNS provider profile ID

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/dns/redirects

- operationId: `get_dns_redirects`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `DNSRedirectRule`[]

- `answer_mode`: DnsRedirectAnswerMode (required)
- `apply_flows`: u32[] (required)
- `enable`: boolean (required)
- `id`: string
- `match_rules`: RuleSource[] (required)
- `remark`: string (required)
- `result_info`: string[] (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_DNSRedirectRule`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/redirects

- operationId: `add_dns_redirects`

**参数**

> 无

**请求体**

- `answer_mode`: DnsRedirectAnswerMode (required)
- `apply_flows`: u32[] (required)
- `enable`: boolean (required)
- `id`: string
- `match_rules`: RuleSource[] (required)
- `remark`: string (required)
- `result_info`: string[] (required)
- `update_at`: number

**响应 data**

- `answer_mode`: DnsRedirectAnswerMode (required)
- `apply_flows`: u32[] (required)
- `enable`: boolean (required)
- `id`: string
- `match_rules`: RuleSource[] (required)
- `remark`: string (required)
- `result_info`: string[] (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_DNSRedirectRule`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/redirects/batch

- operationId: `add_many_dns_redirects`

**参数**

> 无

**请求体**

> 类型: DNSRedirectRule[]

**响应 data**

> 未定义

### GET /api/v1/dns/redirects/dynamic

- operationId: `get_dynamic_dns_redirects`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `DynamicDnsRedirectBatch`[]

- `records`: DynamicDnsRedirectRecord[] (required)
- `scope`: DynamicDnsRedirectScope (required)
- `source_id`: string (required)

> 外层包装 `LandscapeApiResp_Vec_DynamicDnsRedirectBatch`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/redirects/dynamic

- operationId: `set_dynamic_dns_redirect_batch`

**参数**

> 无

**请求体**

- `records`: DynamicDnsRedirectRecord[] (required)
- `scope`: DynamicDnsRedirectScope (required)
- `source_id`: string (required)

**响应 data**

- `records`: DynamicDnsRedirectRecord[] (required)
- `scope`: DynamicDnsRedirectScope (required)
- `source_id`: string (required)

> 外层包装 `LandscapeApiResp_DynamicDnsRedirectBatch`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/dns/redirects/{id}

- operationId: `get_dns_redirect`

**参数**

- `id` (path): string (required) — DNS redirect rule ID

**请求体**

> 无

**响应 data**

- `answer_mode`: DnsRedirectAnswerMode (required)
- `apply_flows`: u32[] (required)
- `enable`: boolean (required)
- `id`: string
- `match_rules`: RuleSource[] (required)
- `remark`: string (required)
- `result_info`: string[] (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_DNSRedirectRule`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/dns/redirects/{id}

- operationId: `del_dns_redirects`

**参数**

- `id` (path): string (required) — DNS redirect rule ID

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/dns/rules

- operationId: `get_dns_rules`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `DNSRuleConfig`[]

- `bind_config`: DnsBindConfig (required)
- `enable`: boolean (required)
- `filter`: FilterResult (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required)
- `name`: string (required)
- `source`: RuleSource[] (required)
- `update_at`: number
- `upstream_id`: string (required)

> 外层包装 `LandscapeApiResp_Vec_DNSRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/rules

- operationId: `add_dns_rules`

**参数**

> 无

**请求体**

- `bind_config`: DnsBindConfig (required)
- `enable`: boolean (required)
- `filter`: FilterResult (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required)
- `name`: string (required)
- `source`: RuleSource[] (required)
- `update_at`: number
- `upstream_id`: string (required)

**响应 data**

- `bind_config`: DnsBindConfig (required)
- `enable`: boolean (required)
- `filter`: FilterResult (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required)
- `name`: string (required)
- `source`: RuleSource[] (required)
- `update_at`: number
- `upstream_id`: string (required)

> 外层包装 `LandscapeApiResp_DNSRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/rules/batch

- operationId: `add_many_dns_rules`

**参数**

> 无

**请求体**

> 类型: DNSRuleConfig[]

**响应 data**

> 未定义

### GET /api/v1/dns/rules/flow/{flow_id}

- operationId: `get_flow_dns_rules`

**参数**

- `flow_id` (path): integer (required) — Flow ID

**请求体**

> 无

**响应 data**

> 数组: `DNSRuleConfig`[]

- `bind_config`: DnsBindConfig (required)
- `enable`: boolean (required)
- `filter`: FilterResult (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required)
- `name`: string (required)
- `source`: RuleSource[] (required)
- `update_at`: number
- `upstream_id`: string (required)

> 外层包装 `LandscapeApiResp_Vec_DNSRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/dns/rules/{id}

- operationId: `get_dns_rule`

**参数**

- `id` (path): string (required) — DNS rule ID

**请求体**

> 无

**响应 data**

- `bind_config`: DnsBindConfig (required)
- `enable`: boolean (required)
- `filter`: FilterResult (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required)
- `name`: string (required)
- `source`: RuleSource[] (required)
- `update_at`: number
- `upstream_id`: string (required)

> 外层包装 `LandscapeApiResp_DNSRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/dns/rules/{id}

- operationId: `del_dns_rules`

**参数**

- `id` (path): string (required) — DNS rule ID

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/dns/service

- operationId: `get_dns_service_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 变体: t=staring | t=running | t=stopping | t=stop | t=failed

> 外层包装 `LandscapeApiResp_ServiceStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/service

- operationId: `start_dns_service`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 未定义

### DELETE /api/v1/dns/service

- operationId: `stop_dns_service`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 未定义

### DELETE /api/v1/dns/service/cache

- operationId: `invalidate_domain_cache`
- 说明: Delete DNS runtime cache entry
- 描述: Deletes the DNS runtime cache entry for the selected flow, domain, and record type, then returns the latest inspection result.

**参数**

- `flow_id` (query): integer (required) — Flow used to evaluate DNS rules.
- `domain` (query): string (required) — Domain to query. IDN input is normalized to ASCII before lookup.
- `record_type` (query): LandscapeDnsRecordType (required) — DNS record type to query.
- `apply_filter` (query): boolean — Apply the matched DNS rule filter to returned records.  Set this to `false` when you want full upstream/cache visibility together with `query_filtered`. Set it to `true` when you want the returned records to match runtime filtering behavior.

**请求体**

> 无

**响应 data**

- `cache_records`: LandscapeRecord[] — Cached records for this query. These are filtered only when `apply_filter` is true.
- `dynamic_redirect_source`: string — Dynamic redirect source description, when present.
- `query_filtered`: boolean — Indicates whether the current query type would be filtered by the matched rule. This flag is reported even when `apply_filter` is false.
- `records`: LandscapeRecord[] — Upstream or redirect records returned for this query. These are filtered only when `apply_filter` is true.
- `redirect_id`: string — Matched redirect rule id, if this query was answered by redirect logic.
- `rule_filter`: FilterResult — Filter configured on the matched DNS rule or cache entry.
- `rule_id`: string — Matched DNS rule id, if any.

> 外层包装 `LandscapeApiResp_CheckChainDnsResult`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/service/cache/refresh

- operationId: `refresh_domain_cache`
- 说明: Refresh DNS runtime cache entry from upstream
- 描述: Queries upstream for the selected flow, domain, and record type, updates the DNS runtime cache, then returns the refreshed inspection result.

**参数**

- `flow_id` (query): integer (required) — Flow used to evaluate DNS rules.
- `domain` (query): string (required) — Domain to query. IDN input is normalized to ASCII before lookup.
- `record_type` (query): LandscapeDnsRecordType (required) — DNS record type to query.
- `apply_filter` (query): boolean — Apply the matched DNS rule filter to returned records.  Set this to `false` when you want full upstream/cache visibility together with `query_filtered`. Set it to `true` when you want the returned records to match runtime filtering behavior.

**请求体**

> 无

**响应 data**

- `cache_records`: LandscapeRecord[] — Cached records for this query. These are filtered only when `apply_filter` is true.
- `dynamic_redirect_source`: string — Dynamic redirect source description, when present.
- `query_filtered`: boolean — Indicates whether the current query type would be filtered by the matched rule. This flag is reported even when `apply_filter` is false.
- `records`: LandscapeRecord[] — Upstream or redirect records returned for this query. These are filtered only when `apply_filter` is true.
- `redirect_id`: string — Matched redirect rule id, if this query was answered by redirect logic.
- `rule_filter`: FilterResult — Filter configured on the matched DNS rule or cache entry.
- `rule_id`: string — Matched DNS rule id, if any.

> 外层包装 `LandscapeApiResp_CheckChainDnsResult`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/dns/service/check

- operationId: `check_domain`
- 说明: Inspect DNS resolution for a flow
- 描述: Returns DNS rule matching metadata together with query results. Use `apply_filter=false` to inspect the full upstream/cache result while still seeing whether the query would be filtered by rule. Use `apply_filter=true` when you want returned records to match runtime filtering behavior.

**参数**

- `flow_id` (query): integer (required) — Flow used to evaluate DNS rules.
- `domain` (query): string (required) — Domain to query. IDN input is normalized to ASCII before lookup.
- `record_type` (query): LandscapeDnsRecordType (required) — DNS record type to query.
- `apply_filter` (query): boolean — Apply the matched DNS rule filter to returned records.  Set this to `false` when you want full upstream/cache visibility together with `query_filtered`. Set it to `true` when you want the returned records to match runtime filtering behavior.

**请求体**

> 无

**响应 data**

- `cache_records`: LandscapeRecord[] — Cached records for this query. These are filtered only when `apply_filter` is true.
- `dynamic_redirect_source`: string — Dynamic redirect source description, when present.
- `query_filtered`: boolean — Indicates whether the current query type would be filtered by the matched rule. This flag is reported even when `apply_filter` is false.
- `records`: LandscapeRecord[] — Upstream or redirect records returned for this query. These are filtered only when `apply_filter` is true.
- `redirect_id`: string — Matched redirect rule id, if this query was answered by redirect logic.
- `rule_filter`: FilterResult — Filter configured on the matched DNS rule or cache entry.
- `rule_id`: string — Matched DNS rule id, if any.

> 外层包装 `LandscapeApiResp_CheckChainDnsResult`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/dns/upstreams

- operationId: `get_dns_upstreams`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `DnsUpstreamConfig`[]

- `enable_ip_validation`: boolean,null (required)
- `id`: string
- `ips`: string[] (required)
- `mode`: DnsUpstreamMode (required)
- `port`: integer,null (required)
- `remark`: string (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_DnsUpstreamConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/upstreams

- operationId: `add_dns_upstream`

**参数**

> 无

**请求体**

- `enable_ip_validation`: boolean,null (required)
- `id`: string
- `ips`: string[] (required)
- `mode`: DnsUpstreamMode (required)
- `port`: integer,null (required)
- `remark`: string (required)
- `update_at`: number

**响应 data**

- `enable_ip_validation`: boolean,null (required)
- `id`: string
- `ips`: string[] (required)
- `mode`: DnsUpstreamMode (required)
- `port`: integer,null (required)
- `remark`: string (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_DnsUpstreamConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/dns/upstreams/batch

- operationId: `add_many_dns_upstreams`

**参数**

> 无

**请求体**

> 类型: DnsUpstreamConfig[]

**响应 data**

> 未定义

### GET /api/v1/dns/upstreams/{id}

- operationId: `get_dns_upstream`

**参数**

- `id` (path): string (required) — DNS upstream config ID

**请求体**

> 无

**响应 data**

- `enable_ip_validation`: boolean,null (required)
- `id`: string
- `ips`: string[] (required)
- `mode`: DnsUpstreamMode (required)
- `port`: integer,null (required)
- `remark`: string (required)
- `update_at`: number

> 外层包装 `LandscapeApiResp_DnsUpstreamConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/dns/upstreams/{id}

- operationId: `del_dns_upstream`

**参数**

- `id` (path): string (required) — DNS upstream config ID

**请求体**

> 无

**响应 data**

> 未定义

## Schema


#### `DNSRedirectRule`
> 用于定义 DNS 重定向的单元配置

- `answer_mode`: DnsRedirectAnswerMode (required)
- `apply_flows`: u32[] (required)
- `enable`: boolean (required)
- `id`: string
- `match_rules`: RuleSource[] (required)
- `remark`: string (required)
- `result_info`: string[] (required)
- `update_at`: number


#### `DNSRuleConfig`

- `bind_config`: DnsBindConfig (required)
- `enable`: boolean (required)
- `filter`: FilterResult (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required)
- `name`: string (required)
- `source`: RuleSource[] (required)
- `update_at`: number
- `upstream_id`: string (required)


#### `DdnsFamilyRuntime`

- `last_error`: string
- `last_published_ips`: string[]
- `last_sync_at`: number
- `message`: string
- `next_retry_at`: number
- `reason`: DdnsRuntimeReason
- `retryable`: boolean
- `status`: DdnsJobStatus


#### `DdnsJob`

- `enable`: boolean
- `id`: string
- `name`: string (required)
- `provider_profile_id`: string (required)
- `records`: DdnsRecordConfig[]
- `sources`: DdnsSource[] (required)
- `ttl`: integer
- `update_at`: number
- `zone_name`: string (required)


#### `DdnsJobStatus`

> 类型: `idle` | `syncing` | `success` | `error`


#### `DdnsRecordConfig`

- `enable`: boolean
- `name`: string (required)


#### `DdnsRecordRuntime`

- `ipv4`: DdnsFamilyRuntime (required)
- `ipv6`: DdnsFamilyRuntime (required)
- `name`: string (required)


#### `DdnsRuntimeReason`

> 类型: `disabled` | `not_configured` | `pending` | `publishing` | `published` | `up_to_date` | `waiting_wan_ip` | `no_matching_source` | `source_not_implemented` | `waiting_lan_device_ip` | `waiting_wan_pd_prefix` | `provider_profile_missing` | `provider_unsupported` | `auth_failed` | `rate_limited` | `timeout` | `network_error` | `remote_rejected` | `unknown_error`


#### `DdnsSource`

> 变体: t=local_wan | t=enrolled_device


#### `DnsBindConfig`

- `bind_addr4`: string — 绑定地址 v4 (可选)
- `bind_addr6`: string — 绑定地址 v6 (可选)


#### `DnsProviderConfig`

> 变体: string | object(cloudflare) | object(aliyun) | object(tencent) | object(aws) | object(google)


#### `DnsProviderCredentialCheckRequest`

- `provider_config`: DnsProviderConfig


#### `DnsProviderProfile`

- `ddns_default_ttl`: integer
- `id`: string
- `name`: string (required)
- `provider_config`: DnsProviderConfig
- `remark`: string
- `update_at`: number


#### `DnsRedirectAnswerMode`

> 类型: `static_ips` | `all_local_ips`


#### `DnsUpstreamConfig`

- `enable_ip_validation`: boolean,null (required)
- `id`: string
- `ips`: string[] (required)
- `mode`: DnsUpstreamMode (required)
- `port`: integer,null (required)
- `remark`: string (required)
- `update_at`: number


#### `DnsUpstreamMode`

> 变体: t=plaintext | t=tls | t=https | t=quic


#### `DomainConfig`

- `match_type`: DomainMatchType (required)
- `value`: string (required)


#### `DomainMatchType`

> 类型: `plain` | `regex` | `domain` | `full`


#### `DynamicDnsMatch`

> 变体: t=full | t=domain


#### `DynamicDnsRedirectBatch`

- `records`: DynamicDnsRedirectRecord[] (required)
- `scope`: DynamicDnsRedirectScope (required)
- `source_id`: string (required)


#### `DynamicDnsRedirectRecord`

- `answer_mode`: DnsRedirectAnswerMode (required)
- `match_rule`: DynamicDnsMatch (required)
- `result_info`: string[] (required)
- `ttl_secs`: integer (required)


#### `DynamicDnsRedirectScope`

> 变体: string | object(flow)


#### `FilterResult`

> 类型: `unfilter` | `only_ipv4` | `only_ipv6`


#### `FlowMark`

- `action`: FlowMarkAction (required) — Action
- `allow_reuse_port`: boolean (required) — 允许 NAT 端口共享
- `flow_id`: integer (required) — Flow Id


#### `FlowMarkAction`

> 变体: t=keep_going | t=direct | t=drop | t=redirect


#### `GeoConfigKey`

- `attribute_key`: string,null (required)
- `inverse`: boolean (required)
- `key`: string (required)
- `name`: string (required)


#### `IpFamily`

> 类型: `ipv4` | `ipv6`


#### `LandscapeApiResp_CheckChainDnsResult`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DNSRedirectRule`

- `args`: object
- `data`: object — 用于定义 DNS 重定向的单元配置
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DNSRuleConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DdnsJob`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DdnsJobRuntime`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DnsProviderCredentialCheckResult`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DnsProviderProfile`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DnsUpstreamConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DynamicDnsRedirectBatch`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_DdnsJob`

- `args`: object
- `data`: object | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_DnsProviderProfile`

- `args`: object
- `data`: object | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_ServiceStatus`

- `args`: object
- `data`: t=staring | t=running | t=stopping | t=stop | t=failed
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_DNSRedirectRule`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_DNSRuleConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_DdnsJob`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_DdnsJobRuntime`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_DnsProviderProfile`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_DnsUpstreamConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_DynamicDnsRedirectBatch`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeDnsRecordType`

> 类型: `A` | `AAAA` | `HTTPS`


#### `LandscapeRecord`

- `data`: string (required)
- `name`: string (required)
- `rr_type`: string (required)
- `ttl`: integer (required)


#### `RuleSource`

> 变体: GeoConfigKey | DomainConfig


#### `u32`

> 类型: integer
