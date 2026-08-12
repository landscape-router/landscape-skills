# devices

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/devices/all

- operationId: `list_enrolled_devices`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `EnrolledDevice`[]

- `dhcp_custom_options`: CustomDhcpOption[] — Per-device custom DHCP options (override global DHCP server custom_options) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `dhcp_filter_options`: integer[] — Per-device DHCP option filter blocklist (option codes to not send to this device) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `fake_name`: string — Name to show when "Private Mode" is enabled
- `hostname`: string — Hostname for LAN DNS resolution (e.g., "my-phone")
- `id`: string
- `iface_name`: string — Optional interface name this binding belongs to
- `ipv4`: string — Static IPv4 assignment (Optional)
- `ipv6`: string — Static IPv6 assignment (Optional) For static LAN prefixes, store the full IPv6 address. For PD-based IA_NA, store only the host suffix; runtime combines it with the current /64 prefix.
- `mac`: string (required) — Unique MacAddr for this binding
- `name`: string (required) — The display name chosen by the user
- `remark`: string — Optional remark for the device
- `tag`: string[] (required) — Tags for grouping devices (e.g., "Family", "IoT")
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_EnrolledDevice`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/devices/all

- operationId: `push_enrolled_device`

**参数**

> 无

**请求体**

- `dhcp_custom_options`: CustomDhcpOption[] — Per-device custom DHCP options (override global DHCP server custom_options) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `dhcp_filter_options`: integer[] — Per-device DHCP option filter blocklist (option codes to not send to this device) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `fake_name`: string — Name to show when "Private Mode" is enabled
- `hostname`: string — Hostname for LAN DNS resolution (e.g., "my-phone")
- `id`: string
- `iface_name`: string — Optional interface name this binding belongs to
- `ipv4`: string — Static IPv4 assignment (Optional)
- `ipv6`: string — Static IPv6 assignment (Optional) For static LAN prefixes, store the full IPv6 address. For PD-based IA_NA, store only the host suffix; runtime combines it with the current /64 prefix.
- `mac`: string (required) — Unique MacAddr for this binding
- `name`: string (required) — The display name chosen by the user
- `remark`: string — Optional remark for the device
- `tag`: string[] (required) — Tags for grouping devices (e.g., "Family", "IoT")
- `update_at`: number

**响应 data**

> 未定义

### GET /api/v1/devices/check_invalid/{iface_name}

- operationId: `check_iface_validity`

**参数**

- `iface_name` (path): string (required) — Interface name

**请求体**

> 无

**响应 data**

> 数组: `EnrolledDevice`[]

- `dhcp_custom_options`: CustomDhcpOption[] — Per-device custom DHCP options (override global DHCP server custom_options) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `dhcp_filter_options`: integer[] — Per-device DHCP option filter blocklist (option codes to not send to this device) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `fake_name`: string — Name to show when "Private Mode" is enabled
- `hostname`: string — Hostname for LAN DNS resolution (e.g., "my-phone")
- `id`: string
- `iface_name`: string — Optional interface name this binding belongs to
- `ipv4`: string — Static IPv4 assignment (Optional)
- `ipv6`: string — Static IPv6 assignment (Optional) For static LAN prefixes, store the full IPv6 address. For PD-based IA_NA, store only the host suffix; runtime combines it with the current /64 prefix.
- `mac`: string (required) — Unique MacAddr for this binding
- `name`: string (required) — The display name chosen by the user
- `remark`: string — Optional remark for the device
- `tag`: string[] (required) — Tags for grouping devices (e.g., "Family", "IoT")
- `update_at`: number

> 外层包装 `LandscapeApiResp_Vec_EnrolledDevice`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/devices/validate_ip

- operationId: `handle_validate_ip`

**参数**

> 无

**请求体**

- `iface_name`: string (required)
- `ipv4`: string (required)

**响应 data**

> `LandscapeApiResp_bool`

### GET /api/v1/devices/{id}

- operationId: `get_enrolled_device`

**参数**

- `id` (path): string (required) — Enrolled device ID

**请求体**

> 无

**响应 data**

> `LandscapeApiResp_Option_EnrolledDevice`

### PUT /api/v1/devices/{id}

- operationId: `update_enrolled_device`

**参数**

- `id` (path): string (required) — Enrolled device ID

**请求体**

- `dhcp_custom_options`: CustomDhcpOption[] — Per-device custom DHCP options (override global DHCP server custom_options) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `dhcp_filter_options`: integer[] — Per-device DHCP option filter blocklist (option codes to not send to this device) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `fake_name`: string — Name to show when "Private Mode" is enabled
- `hostname`: string — Hostname for LAN DNS resolution (e.g., "my-phone")
- `id`: string
- `iface_name`: string — Optional interface name this binding belongs to
- `ipv4`: string — Static IPv4 assignment (Optional)
- `ipv6`: string — Static IPv6 assignment (Optional) For static LAN prefixes, store the full IPv6 address. For PD-based IA_NA, store only the host suffix; runtime combines it with the current /64 prefix.
- `mac`: string (required) — Unique MacAddr for this binding
- `name`: string (required) — The display name chosen by the user
- `remark`: string — Optional remark for the device
- `tag`: string[] (required) — Tags for grouping devices (e.g., "Family", "IoT")
- `update_at`: number

**响应 data**

> 未定义

### DELETE /api/v1/devices/{id}

- operationId: `delete_enrolled_device`

**参数**

- `id` (path): string (required) — Enrolled device ID

**请求体**

> 无

**响应 data**

> 未定义

## Schema


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


#### `DhcpV4DnrOptionConfig`

> 变体: object(mode) | object(doh_path, domains, ips, mode, port)


#### `EnrolledDevice`

- `dhcp_custom_options`: CustomDhcpOption[] — Per-device custom DHCP options (override global DHCP server custom_options) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `dhcp_filter_options`: integer[] — Per-device DHCP option filter blocklist (option codes to not send to this device) 注意：此字段的修改需要重启 DHCP 服务才能生效。
- `fake_name`: string — Name to show when "Private Mode" is enabled
- `hostname`: string — Hostname for LAN DNS resolution (e.g., "my-phone")
- `id`: string
- `iface_name`: string — Optional interface name this binding belongs to
- `ipv4`: string — Static IPv4 assignment (Optional)
- `ipv6`: string — Static IPv6 assignment (Optional) For static LAN prefixes, store the full IPv6 address. For PD-based IA_NA, store only the host suffix; runtime combines it with the current /64 prefix.
- `mac`: string (required) — Unique MacAddr for this binding
- `name`: string (required) — The display name chosen by the user
- `remark`: string — Optional remark for the device
- `tag`: string[] (required) — Tags for grouping devices (e.g., "Family", "IoT")
- `update_at`: number


#### `LandscapeApiResp_Option_EnrolledDevice`

- `args`: object
- `data`: object | null
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_EnrolledDevice`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_bool`

- `args`: object
- `data`: boolean
- `error_id`: string
- `message`: string


#### `RelayAgentInfo`
> Newtype wrapper for [`dhcproto::v4::relay::RelayAgentInformation`].
Required because the upstream type does not implement `utoipa::ToSchema`.

> 类型: object — Newtype wrapper for [`dhcproto::v4::relay::RelayAgentInformation`]. Required because the upstream type does not implement `utoipa::ToSchema`.


#### `ValidateIpPayload`

- `iface_name`: string (required)
- `ipv4`: string (required)
