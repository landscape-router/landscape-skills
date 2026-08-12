# metrics

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/metrics/connections

- operationId: `get_connects_info`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `ConnectRealtimeStatus`[]

- `create_time_ms`: integer (required)
- `dst_ip`: string (required)
- `dst_port`: integer (required)
- `egress_bps`: integer (required)
- `egress_pps`: integer (required)
- `flow_id`: integer (required)
- `gress`: integer (required)
- `ifindex`: integer (required)
- `ingress_bps`: integer (required)
- `ingress_pps`: integer (required)
- `key`: ConnectKey (required)
- `l3_proto`: integer (required)
- `l4_proto`: integer (required)
- `last_report_time`: integer (required)
- `src_ip`: string (required)
- `src_port`: integer (required)
- `status`: ConnectStatusType (required)
- `trace_id`: integer (required)

> 外层包装 `LandscapeApiResp_Vec_ConnectRealtimeStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/metrics/connections/chart

- operationId: `get_connect_metric_info`

**参数**

> 无

**请求体**

- `key`: ConnectKey (required)
- `resolution`: MetricResolution

**响应 data**

> 数组: `ConnectMetricPoint`[]

- `egress_bytes`: integer (required)
- `egress_packets`: integer (required)
- `ingress_bytes`: integer (required)
- `ingress_packets`: integer (required)
- `report_time`: integer (required)
- `status`: ConnectStatusType (required)

> 外层包装 `LandscapeApiResp_Vec_ConnectMetricPoint`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/connections/dst_ip_stats

- operationId: `get_dst_ip_stats`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `IpRealtimeStat`[]

- `ip`: string (required)
- `stats`: IpAggregatedStats (required)

> 外层包装 `LandscapeApiResp_Vec_IpRealtimeStat`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/connections/global_stats

- operationId: `get_connect_global_stats`

**参数**

- `force_refresh` (query): boolean

**请求体**

> 无

**响应 data**

- `last_calculate_time`: integer (required)
- `total_connect_count`: integer (required)
- `total_egress_bytes`: integer (required)
- `total_egress_pkts`: integer (required)
- `total_ingress_bytes`: integer (required)
- `total_ingress_pkts`: integer (required)

> 外层包装 `LandscapeApiResp_ConnectGlobalStats`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/connections/history

- operationId: `get_connect_history`

**参数**

- `start_time` (query): integer
- `end_time` (query): integer
- `limit` (query): integer
- `src_ip` (query): string
- `dst_ip` (query): string
- `port_start` (query): integer
- `port_end` (query): integer
- `l3_proto` (query): integer
- `l4_proto` (query): integer
- `flow_id` (query): integer
- `sort_key` (query): ConnectSortKey
- `sort_order` (query): SortOrder
- `status` (query): integer
- `gress` (query): integer
- `ifindex` (query): integer

**请求体**

> 无

**响应 data**

> 数组: `ConnectHistoryStatus`[]

- `create_time_ms`: integer (required)
- `dst_ip`: string (required)
- `dst_port`: integer (required)
- `flow_id`: integer (required)
- `gress`: integer (required)
- `ifindex`: integer (required)
- `key`: ConnectKey (required)
- `l3_proto`: integer (required)
- `l4_proto`: integer (required)
- `last_report_time`: integer (required)
- `src_ip`: string (required)
- `src_port`: integer (required)
- `status`: integer (required)
- `total_egress_bytes`: integer (required)
- `total_egress_pkts`: integer (required)
- `total_ingress_bytes`: integer (required)
- `total_ingress_pkts`: integer (required)
- `trace_id`: integer (required)

> 外层包装 `LandscapeApiResp_Vec_ConnectHistoryStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/connections/history/dst_ip_stats

- operationId: `get_history_dst_ip_stats`

**参数**

- `start_time` (query): integer
- `end_time` (query): integer
- `limit` (query): integer
- `src_ip` (query): string
- `dst_ip` (query): string
- `port_start` (query): integer
- `port_end` (query): integer
- `l3_proto` (query): integer
- `l4_proto` (query): integer
- `flow_id` (query): integer
- `sort_key` (query): ConnectSortKey
- `sort_order` (query): SortOrder
- `status` (query): integer
- `gress` (query): integer
- `ifindex` (query): integer

**请求体**

> 无

**响应 data**

> 数组: `IpHistoryStat`[]

- `connect_count`: integer (required)
- `flow_id`: integer (required)
- `ip`: string (required)
- `total_egress_bytes`: integer (required)
- `total_egress_pkts`: integer (required)
- `total_ingress_bytes`: integer (required)
- `total_ingress_pkts`: integer (required)

> 外层包装 `LandscapeApiResp_Vec_IpHistoryStat`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/connections/history/src_ip_stats

- operationId: `get_history_src_ip_stats`

**参数**

- `start_time` (query): integer
- `end_time` (query): integer
- `limit` (query): integer
- `src_ip` (query): string
- `dst_ip` (query): string
- `port_start` (query): integer
- `port_end` (query): integer
- `l3_proto` (query): integer
- `l4_proto` (query): integer
- `flow_id` (query): integer
- `sort_key` (query): ConnectSortKey
- `sort_order` (query): SortOrder
- `status` (query): integer
- `gress` (query): integer
- `ifindex` (query): integer

**请求体**

> 无

**响应 data**

> 数组: `IpHistoryStat`[]

- `connect_count`: integer (required)
- `flow_id`: integer (required)
- `ip`: string (required)
- `total_egress_bytes`: integer (required)
- `total_egress_pkts`: integer (required)
- `total_ingress_bytes`: integer (required)
- `total_ingress_pkts`: integer (required)

> 外层包装 `LandscapeApiResp_Vec_IpHistoryStat`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/connections/iface_stats

- operationId: `get_iface_stats`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `IfaceRealtimeStat`[]

- `ifindex`: integer (required)
- `last_report_time`: integer (required)
- `stats`: IpAggregatedStats (required)

> 外层包装 `LandscapeApiResp_Vec_IfaceRealtimeStat`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/connections/src_ip_stats

- operationId: `get_src_ip_stats`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `IpRealtimeStat`[]

- `ip`: string (required)
- `stats`: IpAggregatedStats (required)

> 外层包装 `LandscapeApiResp_Vec_IpRealtimeStat`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/dns/history

- operationId: `get_dns_history`

**参数**

- `start_time` (query): integer
- `end_time` (query): integer
- `limit` (query): integer
- `offset` (query): integer
- `domain` (query): string
- `src_ip` (query): string
- `query_type` (query): string
- `status` (query): DnsOutcome
- `min_duration_ms` (query): integer
- `max_duration_ms` (query): integer
- `sort_key` (query): DnsSortKey
- `sort_order` (query): SortOrder
- `flow_id` (query): integer

**请求体**

> 无

**响应 data**

- `items`: DnsMetric[] (required)
- `total`: integer (required)

> 外层包装 `LandscapeApiResp_DnsHistoryResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/dns/summary

- operationId: `get_dns_summary`

**参数**

- `start_time` (query): integer (required)
- `end_time` (query): integer (required)
- `flow_id` (query): integer

**请求体**

> 无

**响应 data**

- `avg_duration_ms`: number (required)
- `block_count`: integer (required)
- `cache_hit_count`: integer (required)
- `error_count`: integer (required)
- `filter_count`: integer (required)
- `hit_count_other`: integer (required)
- `hit_count_v4`: integer (required)
- `hit_count_v6`: integer (required)
- `max_duration_ms`: number (required)
- `nxdomain_count`: integer (required)
- `p50_duration_ms`: number (required)
- `p95_duration_ms`: number (required)
- `p99_duration_ms`: number (required)
- `slowest_domains`: DnsStatEntry[] (required)
- `top_blocked`: DnsStatEntry[] (required)
- `top_clients`: DnsStatEntry[] (required)
- `top_domains`: DnsStatEntry[] (required)
- `total_effective_queries`: integer (required)
- `total_other`: integer (required)
- `total_queries`: integer (required)
- `total_v4`: integer (required)
- `total_v6`: integer (required)

> 外层包装 `LandscapeApiResp_DnsSummaryResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/dns/summary/lightweight

- operationId: `get_dns_lightweight_summary`

**参数**

- `start_time` (query): integer (required)
- `end_time` (query): integer (required)
- `flow_id` (query): integer

**请求体**

> 无

**响应 data**

- `avg_duration_ms`: number (required)
- `block_count`: integer (required)
- `cache_hit_count`: integer (required)
- `error_count`: integer (required)
- `filter_count`: integer (required)
- `hit_count_other`: integer (required)
- `hit_count_v4`: integer (required)
- `hit_count_v6`: integer (required)
- `max_duration_ms`: number (required)
- `nxdomain_count`: integer (required)
- `p50_duration_ms`: number (required)
- `p95_duration_ms`: number (required)
- `p99_duration_ms`: number (required)
- `total_effective_queries`: integer (required)
- `total_other`: integer (required)
- `total_queries`: integer (required)
- `total_v4`: integer (required)
- `total_v6`: integer (required)

> 外层包装 `LandscapeApiResp_DnsLightweightSummaryResponse`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/metrics/status

- operationId: `get_metric_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 变体: t=staring | t=running | t=stopping | t=stop | t=failed

> 外层包装 `LandscapeApiResp_ServiceStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

## Schema


#### `ConnectKey`

- `cpu_id`: integer (required)
- `create_time`: string (required)


#### `ConnectSortKey`

> 类型: `time` | `port` | `ingress` | `egress` | `duration`


#### `ConnectStatusType`

> 类型: `unknow` | `active` | `disabled`


#### `DnsMetric`

- `answers`: string[] (required)
- `domain`: string (required)
- `duration_ms`: integer (required)
- `flow_id`: integer (required)
- `query_type`: string (required)
- `report_time`: integer (required)
- `response_code`: string (required)
- `src_ip`: string (required)
- `status`: DnsOutcome (required)


#### `DnsOutcome`

> 类型: `local` | `block` | `hit` | `nxdomain` | `filter` | `normal` | `error`


#### `DnsSortKey`

> 类型: `time` | `domain` | `duration`


#### `DnsStatEntry`

- `count`: integer (required)
- `name`: string (required)
- `value`: number


#### `IpAggregatedStats`

- `active_conns`: integer (required)
- `egress_bps`: integer (required)
- `egress_pps`: integer (required)
- `ingress_bps`: integer (required)
- `ingress_pps`: integer (required)


#### `LandscapeApiResp_ConnectGlobalStats`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DnsHistoryResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DnsLightweightSummaryResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_DnsSummaryResponse`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_ServiceStatus`

- `args`: object
- `data`: t=staring | t=running | t=stopping | t=stop | t=failed
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_ConnectHistoryStatus`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_ConnectMetricPoint`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_ConnectRealtimeStatus`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_IfaceRealtimeStat`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_IpHistoryStat`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_IpRealtimeStat`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `MetricChartRequest`

- `key`: ConnectKey (required)
- `resolution`: MetricResolution


#### `MetricResolution`

> 类型: `second` | `minute` | `hour` | `day`


#### `SortOrder`

> 类型: `asc` | `desc`
