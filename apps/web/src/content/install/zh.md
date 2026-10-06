---
title: 如何安装 Sons of the Forest 模组
seoTitle: 如何安装 Sons of the Forest 模组（2026）：RedLoader 指南
description: 用 RedManager 安装 RedLoader，把模组放进 Mods 文件夹，并在游戏中确认加载。分步指南，附杀毒软件误报和游戏补丁问题的解决办法。
tldr: 用 RedManager（或手动）安装模组加载器 RedLoader，把每个模组放进游戏目录下的 Mods 文件夹，然后启动游戏。RedManager 可以一键安装 SOTF Mods 上的任何模组。整个过程大约三分钟，下面的指南涵盖每一步和常见问题。
anchors: [check, redloader, mods, verify, antivirus, bepinex, update, dedicated, troubleshooting, oneclick]
nav:
  check: 检查游戏
  redloader: 安装 RedLoader
  mods: 添加模组
  verify: 在游戏中确认
  antivirus: 杀毒软件警告
  bepinex: BepInEx 还是 RedLoader？
  update: 更新与卸载
  dedicated: 专用服务器
  troubleshooting: 故障排除
  oneclick: 一键安装器
faq:
  - q: 我需要在 Steam 上拥有这款游戏吗？
    a: 需要。Sons of the Forest 的模组运行在游戏的 PC 版上。RedLoader 会修改你 Steam 安装目录中的游戏文件，所以你需要在 Windows 上通过 Steam 安装游戏（或在 Linux 和 Steam Deck 上通过 Proton 运行）。
  - q: 使用模组会被封号吗？
    a: Sons of the Forest 没有反作弊系统，社区也在公开使用模组。多人游戏时，只和同意使用模组的玩家一起加入或主持游戏，并让所有人使用相同的模组和版本。
  - q: 模组会损坏我的存档吗？
    a: 大多数模组不会改动你的存档。添加物品、建筑或世界改动的模组，如果在游戏中途移除，可能会留下痕迹；模组页面会说明能否安全移除。尝试大型模组前，请先备份存档文件夹。
  - q: 为什么安装模组后没有任何反应？
    a: 通常是 RedLoader 没有安装或版本过旧、模组解压到了错误的文件夹、缺少必需的库，或者该模组是为 BepInEx 制作的。请按照故障排除一节逐项检查，先从 RedLoader 控制台开始。
  - q: 游戏文件在哪里？
    a: 在 Steam 中右键点击 Sons of the Forest，选择管理，再选择浏览本地文件。打开的文件夹里有 SonsOfTheForest.exe，RedLoader 和你的模组都放在这里。
  - q: 游戏更新后模组还能用吗？
    a: 不一定。游戏补丁可能会让 RedLoader 或部分模组失效，直到它们更新为止。请查看模组页面、评论和评价，确认它能否在当前游戏版本上运行。
---

# 检查游戏

模组适用于 **Steam 上的 PC 版 Sons of the Forest**（Windows，或通过 Proton 在 Linux 和 Steam Deck 上运行）。开始前先在 Steam 中更新游戏：RedLoader 和大多数模组都会跟进最新补丁。

找到游戏文件夹：在 Steam 中右键点击 **Sons of the Forest** → **管理** → **浏览本地文件**。打开的文件夹里有 `SonsOfTheForest.exe`。通常路径是：

`C:\Program Files (x86)\Steam\steamapps\common\Sons Of The Forest`

> [!TIP]
> 游戏刚更新？请查看模组页面、评论和评价，确认它是否已经能在新版本上运行。

# 安装 RedLoader

RedLoader 是专为 Sons of the Forest 打造的模组加载器。SOTF Mods 上的每个模组都需要它。安装方式有两种。

## 方式 A：RedManager（推荐）

RedManager 是同一位开发者为 RedLoader 制作的免费模组管理器。它会替你安装 RedLoader，还能一键安装 SOTF Mods 上的任何模组及其依赖。

1. 从 [官方发布页](https://github.com/ToniMacaroni/RedManager/releases) 下载最新版 RedManager。
2. 运行它。它会自动找到游戏文件夹（也可以手动选择）。
3. 点击 **Install RedLoader**，等待完成。

## 方式 B：手动安装

1. 从 [RedLoader 官方发布页](https://github.com/ToniMacaroni/RedLoader/releases) 下载最新的 `RedLoader.zip`。
2. 把所有内容解压到游戏文件夹中，放在 `SonsOfTheForest.exe` 旁边。
3. 启动一次游戏。RedLoader 会打开控制台窗口并创建它的文件夹：`_RedLoader`、`Mods` 和 `Libs`。

> [!WARNING]
> 只从官方 GitHub 页面下载 RedLoader 和 RedManager。其他网站上的副本可能已过时或被篡改。

# 添加模组

**使用 RedManager：** 搜索模组，点击 **Install**，RedManager 会把模组和所需的库下载到正确的文件夹。

**手动：**

1. 在模组页面阅读 **需求**，先安装所有必需的库。
2. 点击 **下载** 并打开 `.zip`。
3. 保持压缩包内的文件夹结构，将其解压到游戏文件夹。模组文件会进入 `Mods`（一个 `.dll`，通常还有同名文件夹），附带的库会进入 `Libs`。
4. 如果压缩包里只有一个 `.dll`，直接把它放进 `Mods` 文件夹。

> [!IMPORTANT]
> 专用服务器用的模组要放在服务器自己的文件夹里，而不是游戏文件夹。参见 [专用服务器](#dedicated)。

# 在游戏中确认

1. 像平常一样从 Steam 启动游戏。RedLoader 控制台会在游戏旁打开，列出加载的每个模组；错误以红色显示。
2. 在标题画面按 **F1** 打开 RedLoader 面板，确认你的模组都在列表中。带设置的模组会在这里显示选项。
3. 开始或读取一个存档，试试模组。

如果列表中缺少某个模组，请查看 [故障排除](#troubleshooting)。

# 杀毒软件警告（误报）

部分杀毒软件和 Windows SmartScreen 会标记 RedLoader、RedManager 或某些模组。模组加载器会向游戏注入代码，这正是启发式检测要找的行为，所以即使文件干净也常会出现警告。

在信任一个文件之前：

- **只从官方来源下载**：SOTF Mods 上的模组页面，或 RedLoader 与 RedManager 的官方 GitHub 发布页。
- **核对校验值。** SOTF Mods 上的每个版本都会显示文件的 SHA-256。在 Windows 的 PowerShell 中运行 `Get-FileHash .\file.zip`（或 `certutil -hashfile file.zip SHA256`）并比对结果。
- **查看扫描报告。** 每个发布的版本都经过 VirusTotal 扫描，报告链接在版本页面上。你也可以自己把文件上传到 [VirusTotal](https://www.virustotal.com)。

如果一切吻合，可以把文件从隔离区恢复，并**只为游戏文件夹**添加排除项。切勿完全关闭杀毒软件。如果发现可疑之处，请在模组页面举报：版主会尽快处理。

# BepInEx 还是 RedLoader？

SOTF Mods 收录的是 **RedLoader** 模组。为 BepInEx 制作的模组（在其他网站很常见）需要另一种加载器：放进 RedLoader 的文件夹后，它们什么也不会做，也不会报错。

- 安装前确认模组是为 RedLoader 制作的。
- 不要同时安装两种加载器。如果之前用过 BepInEx，请从游戏文件夹中删除它的文件（`BepInEx`、`doorstop_config.ini` 和 `winhttp.dll`）。

# 更新与卸载

**更新模组：** RedManager 会显示可用更新。手动更新时，下载新版本并覆盖旧文件。请先阅读更新日志：有些更新需要新的库或全新的配置。

**更新 RedLoader：** 使用 RedManager，或把新版本解压覆盖旧版本。游戏打补丁后，如果游戏无法启动，请等待新的 RedLoader 版本。

**移除模组：** 删除 `Mods` 中该模组的 `.dll` 和文件夹。请先查看模组页面：有些模组不能在游戏进行中安全移除。

**彻底移除 RedLoader：** 删除 `_RedLoader`、`Mods`、`Libs`，以及 RedLoader 压缩包在 `SonsOfTheForest.exe` 旁添加的其他文件，然后在 Steam 中使用 **属性 → 已安装文件 → 验证游戏文件的完整性**。

# 专用服务器

RedLoader 也能在 Sons of the Forest 专用服务器上运行。

1. 按手动安装的方式，把 RedLoader 安装到服务器文件夹（包含 `SonsOfTheForestDS.exe` 的那个）。
2. 只安装页面注明支持专用服务器的模组，放到服务器的 `Mods` 文件夹。
3. 阅读每个模组的多人说明：有些只需在服务器上安装，有些每位玩家的游戏里也要安装。所有人必须使用相同版本。

许多游戏服务器托管商在面板中提供一键安装 RedLoader。如果你的没有，可以用它们的文件管理器或 FTP 上传文件。

# 故障排除

## 什么都没发生：没有控制台，也没有模组

RedLoader 没有运行。确认它的文件在 `SonsOfTheForest.exe` 旁边（而不是子文件夹里），确认你是从 Steam 启动的游戏，并确认杀毒软件没有把它们隔离。如有疑问，重新安装 RedLoader。

## 游戏启动时崩溃或关闭

这通常发生在游戏更新之后。请在 [RedLoader 发布页](https://github.com/ToniMacaroni/RedLoader/releases) 查找支持新游戏版本的版本。要找出有问题的模组，把所有模组移出 `Mods`，再每次放回几个。

## 某个模组不在列表中

它可能放错了文件夹、缺少必需的库，或者是为 BepInEx 制作的。阅读 RedLoader 控制台中的红色行：它们会指出缺少的文件或库。

## “Windows 已保护你的电脑”

SmartScreen 会对不常见的程序发出警告。如果你是从官方页面下载的 RedManager，点击 **更多信息 → 仍要运行**。参见 [杀毒软件警告](#antivirus)。

## RedManager 找不到游戏

在 RedManager 的设置中手动指定游戏文件夹：包含 `SonsOfTheForest.exe` 的文件夹。

## 多人游戏中无法加入或出现不同步

除非模组说明只需要主机安装，否则所有人都必须使用相同的模组和版本。对比你们的模组列表并更新到相同版本。

# 一键安装器已停用

旧的 **SOTF Mods One-Click** 安装器（`sotfmodsoneclick-setup`）已无法配合本站使用，也不再提供。如果你安装过它，请在 **Windows 设置 → 应用** 中卸载。

请改用 [RedManager](https://github.com/ToniMacaroni/RedManager/releases)：它可以一键安装 RedLoader 以及 SOTF Mods 上的任何模组和依赖。
