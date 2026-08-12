# flow

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/flow/dst_ip_rules

- operationId: `get_dst_ip_rules`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `WanIpRuleConfig`[]

- `enable`: boolean (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required) — 流量标记
- `override_dns`: boolean (required)
- `remark`: string (required)
- `source`: WanIPRuleSource[] (required) — 匹配规则列表
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_WanIpRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/flow/dst_ip_rules

- operationId: `add_dst_ip_rules`

**参数**

> 无

**请求体**

- `enable`: boolean (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required) — 流量标记
- `override_dns`: boolean (required)
- `remark`: string (required)
- `source`: WanIPRuleSource[] (required) — 匹配规则列表
- `update_at`: number

**响应 data**

- `enable`: boolean (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required) — 流量标记
- `override_dns`: boolean (required)
- `remark`: string (required)
- `source`: WanIPRuleSource[] (required) — 匹配规则列表
- `update_at`: number

> 外层包装 `LandscapeApiResp_WanIpRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/flow/dst_ip_rules/batch

- operationId: `add_many_dst_ip_rules`

**参数**

> 无

**请求体**

> 类型: WanIpRuleConfig[]

**响应 data**

> 未定义

### GET /api/v1/flow/dst_ip_rules/flow/{flow_id}

- operationId: `get_flow_dst_ip_rules`

**参数**

- `flow_id` (path): integer (required) — Flow ID

**请求体**

> 无

**响应 data**

> 数组: `WanIpRuleConfig`[]

- `enable`: boolean (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required) — 流量标记
- `override_dns`: boolean (required)
- `remark`: string (required)
- `source`: WanIPRuleSource[] (required) — 匹配规则列表
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_WanIpRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/flow/dst_ip_rules/{id}

- operationId: `get_dst_ip_rule`

**参数**

- `id` (path): string (required) — Destination IP rule ID

**请求体**

> 无

**响应 data**

- `enable`: boolean (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required) — 流量标记
- `override_dns`: boolean (required)
- `remark`: string (required)
- `source`: WanIPRuleSource[] (required) — 匹配规则列表
- `update_at`: number

> 外层包装 `LandscapeApiResp_WanIpRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/flow/dst_ip_rules/{id}

- operationId: `modify_dst_ip_rules`

**参数**

- `id` (path): string (required) — Destination IP rule ID

**请求体**

- `enable`: boolean (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required) — 流量标记
- `override_dns`: boolean (required)
- `remark`: string (required)
- `source`: WanIPRuleSource[] (required) — 匹配规则列表
- `update_at`: number

**响应 data**

- `enable`: boolean (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required) — 流量标记
- `override_dns`: boolean (required)
- `remark`: string (required)
- `source`: WanIPRuleSource[] (required) — 匹配规则列表
- `update_at`: number

> 外层包装 `LandscapeApiResp_WanIpRuleConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/flow/dst_ip_rules/{id}

- operationId: `del_dst_ip_rule`

**参数**

- `id` (path): string (required) — Destination IP rule ID

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/flow/rules

- operationId: `get_flow_rules`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `FlowConfig`[]

- `enable`: boolean (required) — 是否启用
- `flow_id`: integer (required) — 流 ID
- `flow_match_rules`: FlowEntryRule[] (required) — 匹配规则
- `flow_targets`: WeightedFlowTarget[] (required) — 处理流量目标网卡, 目前只取第一个 暂定, 可能会移动到具体的网卡上进行设置
- `id`: string
- `name`: string — 名称 (用于展示的简短标识, 为空时回退到 remark)
- `remark`: string (required) — 备注
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_FlowConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/flow/rules

- operationId: `add_flow_rule`

**参数**

> 无

**请求体**

- `enable`: boolean (required) — 是否启用
- `flow_id`: integer (required) — 流 ID
- `flow_match_rules`: FlowEntryRule[] (required) — 匹配规则
- `flow_targets`: WeightedFlowTarget[] (required) — 处理流量目标网卡, 目前只取第一个 暂定, 可能会移动到具体的网卡上进行设置
- `id`: string
- `name`: string — 名称 (用于展示的简短标识, 为空时回退到 remark)
- `remark`: string (required) — 备注
- `update_at`: number

**响应 data**

- `enable`: boolean (required) — 是否启用
- `flow_id`: integer (required) — 流 ID
- `flow_match_rules`: FlowEntryRule[] (required) — 匹配规则
- `flow_targets`: WeightedFlowTarget[] (required) — 处理流量目标网卡, 目前只取第一个 暂定, 可能会移动到具体的网卡上进行设置
- `id`: string
- `name`: string — 名称 (用于展示的简短标识, 为空时回退到 remark)
- `remark`: string (required) — 备注
- `update_at`: number

> 外层包装 `LandscapeApiResp_FlowConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/flow/rules/flow_id/{id}

- operationId: `get_flow_rule_by_flow_id`

**参数**

- `id` (path): integer (required) — Flow ID

**请求体**

> 无

**响应 data**

- `enable`: boolean (required) — 是否启用
- `flow_id`: integer (required) — 流 ID
- `flow_match_rules`: FlowEntryRule[] (required) — 匹配规则
- `flow_targets`: WeightedFlowTarget[] (required) — 处理流量目标网卡, 目前只取第一个 暂定, 可能会移动到具体的网卡上进行设置
- `id`: string
- `name`: string — 名称 (用于展示的简短标识, 为空时回退到 remark)
- `remark`: string (required) — 备注
- `update_at`: number

> 外层包装 `LandscapeApiResp_FlowConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/flow/rules/{id}

- operationId: `get_flow_rule`

**参数**

- `id` (path): string (required) — Flow rule config ID

**请求体**

> 无

**响应 data**

- `enable`: boolean (required) — 是否启用
- `flow_id`: integer (required) — 流 ID
- `flow_match_rules`: FlowEntryRule[] (required) — 匹配规则
- `flow_targets`: WeightedFlowTarget[] (required) — 处理流量目标网卡, 目前只取第一个 暂定, 可能会移动到具体的网卡上进行设置
- `id`: string
- `name`: string — 名称 (用于展示的简短标识, 为空时回退到 remark)
- `remark`: string (required) — 备注
- `update_at`: number

> 外层包装 `LandscapeApiResp_FlowConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/flow/rules/{id}

- operationId: `del_flow_rule`

**参数**

- `id` (path): string (required) — Flow rule config ID

**请求体**

> 无

**响应 data**

> 未定义

## Schema


#### `FlowConfig`
> 流控配置结构体

- `enable`: boolean (required) — 是否启用
- `flow_id`: integer (required) — 流 ID
- `flow_match_rules`: FlowEntryRule[] (required) — 匹配规则
- `flow_targets`: WeightedFlowTarget[] (required) — 处理流量目标网卡, 目前只取第一个 暂定, 可能会移动到具体的网卡上进行设置
- `id`: string
- `name`: string — 名称 (用于展示的简短标识, 为空时回退到 remark)
- `remark`: string (required) — 备注
- `update_at`: number


#### `FlowEntryMatchMode`

> 变体: t=mac | t=ip | t=device


#### `FlowEntryRule`
> Flow 入口匹配规则

- `mode`: FlowEntryMatchMode (required)
- `qos`: integer,null (required)


#### `FlowMark`

- `action`: FlowMarkAction (required) — Action
- `allow_reuse_port`: boolean (required) — 允许 NAT 端口共享
- `flow_id`: integer (required) — Flow Id


#### `FlowMarkAction`

> 变体: t=keep_going | t=direct | t=drop | t=redirect


#### `FlowTarget`

> 变体: t=interface | t=netns


#### `GeoConfigKey`

- `attribute_key`: string,null (required)
- `inverse`: boolean (required)
- `key`: string (required)
- `name`: string (required)


#### `IpConfig`

- `ip`: string (required)
- `prefix`: integer (required)


#### `LandscapeApiResp_FlowConfig`

- `args`: object
- `data`: object — 流控配置结构体
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_FlowConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_WanIpRuleConfig`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_WanIpRuleConfig`

- `args`: object
- `data`: object — 对于外部 IP 规则
- `error_id`: string
- `message`: string


#### `WanIPRuleSource`

> 变体: GeoConfigKey | IpConfig


#### `WanIpRuleConfig`
> 对于外部 IP 规则

- `enable`: boolean (required)
- `flow_id`: integer (required)
- `id`: string
- `index`: integer (required)
- `mark`: FlowMark (required) — 流量标记
- `override_dns`: boolean (required)
- `remark`: string (required)
- `source`: WanIPRuleSource[] (required) — 匹配规则列表
- `update_at`: number


#### `WeightedFlowTarget`

- `target`: FlowTarget (required)
- `weight`: integer
