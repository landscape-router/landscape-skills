# docker

> 由 `gen-api-docs.js` 基于 `openapi.sample.json`(v0.22.3) 自动生成,端点与字段以实际设备 spec 为准。

## 端点

### GET /api/v1/docker/containers

- operationId: `get_all_containers`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `args`: object
- `data`: any
- `error_id`: string
- `message`: string

### POST /api/v1/docker/containers/remove/{container_name}

- operationId: `remove_container`

**参数**

- `container_name` (path): string (required) — Container name

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/docker/containers/run/{container_name}

- operationId: `run_container`

**参数**

- `container_name` (path): string (required) — Container name

**请求体**

> 类型: any

**响应 data**

> 未定义

### POST /api/v1/docker/containers/run_cmd

- operationId: `run_cmd_container`

**参数**

> 无

**请求体**

- `container_name`: string
- `entrypoint`: string
- `environment`: KeyValuePair[]
- `image_name`: string (required)
- `labels`: KeyValuePair[]
- `params`: string
- `ports`: KeyValuePair[]
- `restart`: string
- `restart_max_retries`: integer
- `volumes`: KeyValuePair[]

**响应 data**

> 未定义

### POST /api/v1/docker/containers/start/{container_name}

- operationId: `start_container`

**参数**

- `container_name` (path): string (required) — Container name

**请求体**

> 无

**响应 data**

> 未定义

### POST /api/v1/docker/containers/stop/{container_name}

- operationId: `stop_container`

**参数**

- `container_name` (path): string (required) — Container name

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/docker/images

- operationId: `get_all_docker_images`

**参数**

> 无

**请求体**

> 无

**响应 data**

- `args`: object
- `data`: any
- `error_id`: string
- `message`: string

### POST /api/v1/docker/images/pull

- operationId: `pull_docker_image`

**参数**

> 无

**请求体**

- `image_name`: string (required)
- `tag`: string,null (required)

**响应 data**

> 未定义

### GET /api/v1/docker/images/tasks

- operationId: `get_docker_pull_tasks`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `PullImgTask`[]

- `complete`: boolean (required)
- `id`: string (required)
- `img_name`: string (required)
- `layer_current_info`: object (required)

> 外层包装 `LandscapeApiResp_Vec_PullImgTask`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/docker/images/{id}

- operationId: `delete_docker_image`

**参数**

- `id` (path): string (required) — Image ID

**请求体**

> 无

**响应 data**

> 未定义

### GET /api/v1/docker/networks

- operationId: `get_all_docker_networks`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 数组: `LandscapeDockerNetwork`[]

- `containers`: object (required)
- `driver`: string
- `id`: string (required)
- `iface_name`: string (required)
- `ip_info`: LandscapeDockerIpInfo
- `name`: string (required)
- `options`: object (required)

> 外层包装 `LandscapeApiResp_Vec_LandscapeDockerNetwork`: `data` 即上表;另有 `message`/`error_id`/`args`

### GET /api/v1/docker/service

- operationId: `get_docker_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 变体: t=staring | t=running | t=stopping | t=stop | t=failed

> 外层包装 `LandscapeApiResp_ServiceStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

### POST /api/v1/docker/service

- operationId: `start_docker_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 变体: t=staring | t=running | t=stopping | t=stop | t=failed

> 外层包装 `LandscapeApiResp_ServiceStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

### DELETE /api/v1/docker/service

- operationId: `stop_docker_status`

**参数**

> 无

**请求体**

> 无

**响应 data**

> 变体: t=staring | t=running | t=stopping | t=stop | t=failed

> 外层包装 `LandscapeApiResp_ServiceStatus`: `data` 即上表;另有 `message`/`error_id`/`args`

## Schema


#### `DockerCmd`

- `container_name`: string
- `entrypoint`: string
- `environment`: KeyValuePair[]
- `image_name`: string (required)
- `labels`: KeyValuePair[]
- `params`: string
- `ports`: KeyValuePair[]
- `restart`: string
- `restart_max_retries`: integer
- `volumes`: KeyValuePair[]


#### `KeyValuePair`

- `key`: string (required)
- `value`: string (required)


#### `LandscapeApiResp_ServiceStatus`

- `args`: object
- `data`: t=staring | t=running | t=stopping | t=stop | t=failed
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_LandscapeDockerNetwork`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeApiResp_Vec_PullImgTask`

- `args`: object
- `data`: object[]
- `error_id`: string
- `message`: string


#### `LandscapeDockerIpInfo`

- `gateway`: string (required)
- `prefix`: integer (required)
- `subnet_ip`: string (required)


#### `LandscapeDockerNetworkContainer`

- `mac`: MacAddr
- `name`: string (required)


#### `MacAddr`

> 类型: string[]


#### `PullImageReq`

- `image_name`: string (required)
- `tag`: string,null (required)


#### `PullImgTaskItem`

- `current`: integer
- `id`: string (required)
- `total`: integer
