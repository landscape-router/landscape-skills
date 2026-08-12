# Services: dhcp_v4.md

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### PUT /api/v1/services/dhcp_v4

- operationId: `handle_dhcp_v4_service_config`

**参数**

> 无

**请求体**

- `config`: DHCPv4ServerConfig (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number — 最近一次更新时间

**响应 data**

> 未定义

### GET /api/v1/services/dhcp_v4/arp_scan_info

- operationId: `get_all_iface_arp_scan_info`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_Vec_ArpScanInfo`

### GET /api/v1/services/dhcp_v4/assigned_ips

- operationId: `get_all_dhcp_v4_assigned_ips`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_DHCPv4OfferInfo`

### GET /api/v1/services/dhcp_v4/status

- operationId: `get_all_dhcp_v4_service_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_HashMap_String_ServiceStatus`

### GET /api/v1/services/dhcp_v4/{iface_name}

- operationId: `get_dhcp_v4_service_config`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

- `config`: DHCPv4ServerConfig (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number — 最近一次更新时间

> 外层包装 `LandscapeApiResp_DHCPv4ServiceConfig`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/services/dhcp_v4/{iface_name}

- operationId: `delete_and_stop_dhcp_v4_service`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_ServiceStatus`

### GET /api/v1/services/dhcp_v4/{iface_name}/arp_scan_info

- operationId: `get_arp_scan_info_by_iface_name`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_Vec_ArpScanInfo`

### GET /api/v1/services/dhcp_v4/{iface_name}/assigned_ips

- operationId: `get_dhcp_v4_assigned_ips_by_iface_name`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_DHCPv4OfferInfo`

## Schema


#### `ArpScanInfoItem`

- `ip`: string (required)
- `mac`: MacAddr (required)


#### `CustomDhcpOption`
> Supported custom DHCP option types.

This enum is the **whitelist** of options that can be configured via API.
Each variant maps 1:1 to a frontend UI component.

JSON format (serde externally tagged):
```json
{"TFTPServerName": "192.168.1.1"}
{"BootfileName": "ipxe.kpxe"}
{"VendorExtensions": "ff0001"}
{"RelayAgentInformation": {"AgentCircuitId": "010203"}}
```

> 变体: object(TFTPServerName) | object(BootfileName) | object(VendorExtensions) | object(RelayAgentInformation) | object(Dnr)


#### `DHCPv4OfferInfoItem`

- `expire_time`: integer (required)
- `hostname`: string
- `ip`: string (required)
- `is_static`: boolean (required)
- `mac`: MacAddr (required)
- `prev_ip`: string
- `relative_active_time`: integer (required)


#### `DHCPv4ServerConfig`
> DHCP Server IPv4 Config

- `address_lease_time`: integer,null (required)
- `custom_options`: CustomDhcpOption[] — 自定义 DHCP option，会无条件注入到所有 DHCP 响应中。 适用于 iPXE (option 66/67) 等需要 server 主动下发的场景。 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `ip_range_end`: string,null (required) — range end [not include]
- `ip_range_start`: string (required) — range start
- `network_mask`: integer (required) — network mask e.g. 255.255.255.0 = 24
- `server_ip_addr`: string (required) — DHCP Server Addr e.g. 192.168.1.1


#### `DHCPv4ServiceConfig`

- `config`: DHCPv4ServerConfig (required)
- `enable`: boolean (required)
- `iface_name`: string (required)
- `update_at`: number — 最近一次更新时间


#### `DhcpV4DnrOptionConfig`

> 变体: object(mode) | object(doh_path, domains, ips, mode, port)


#### `LandscapeApiResp_DHCPv4ServiceConfig`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_HashMap_String_DHCPv4OfferInfo`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_HashMap_String_ServiceStatus`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_HashMap_String_Vec_ArpScanInfo`

- `args`: object
- `data`: object
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_DHCPv4OfferInfo`

- `args`: object
- `data`: object | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_ServiceStatus`

- `args`: object
- `data`: t=staring | t=running | t=stopping | t=stop | t=failed | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Option_Vec_ArpScanInfo`

- `args`: object
- `data`: object[] | null
- `error_id`: string
- `message`: string


#### `MacAddr`

> 类型: string[]


#### `RelayAgentInfo`
> Newtype wrapper for [`dhcproto::v4::relay::RelayAgentInformation`].
Required because the upstream type does not implement `utoipa::ToSchema`.

> 类型: object — Newtype wrapper for [`dhcproto::v4::relay::RelayAgentInformation`]. Required because the upstream type does not implement `utoipa::ToSchema`.
