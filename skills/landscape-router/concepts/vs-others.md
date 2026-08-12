# Landscape 与其他路由器的区别

## 定位

- 不是固件发行版(如 OpenWrt),是跑在普通 Linux(Debian/Arch/openSUSE 等)上的路由程序
- 内核随发行版更新,不随固件捆绑

## 数据面

- DNS 驱动分流:DNS 应答写入内核 eBPF 映射,包在 XDP/TC 钩子内核态转向
- 无用户态数据通路、不依赖 iptables 转发
- 对 iptables 的交互:不写 DNS/目的 IP 打标规则,eBPF 在 WAN 出口处理

## 策略模型

- 流(Flow)为策略边界:设备按 IP/MAC 加入流,每流独立 DNS、出口、NAT 策略
- 单流故障只影响该流,不波及其他设备
- 可把匹配流的包重定向进 Docker 容器(TProxy 兼容程序)

## 部署与升级

- 单目录部署(默认 `/root/.landscape-router`),无系统级安装
- 升级 = 替换二进制,配置自动迁移,支持降级
