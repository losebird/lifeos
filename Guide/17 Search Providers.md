Vault Lens 浏览器扩展（https://github.com/jk-oster/obsidian-search-for-web，v2.7.x）在网页搜索结果旁边，以及你再次打开的页面上，显示库里的笔记。它和 Obsidian 里的一个小本地服务说话。这一页记录模板带了哪个服务，以及为什么（来自对插件源码的安全审查）。

## 随库带上的
| 插件 | 状态 | 为什么 |
| --- | --- | --- |
| **Local REST API** 5.1.0 | 已安装、已启用，HTTP 服务在端口 27123 | 唯一能给 Vault Lens 预览、编辑、追加、日记和页面笔记的提供方。用每次安装单独生成的 bearer 密钥认证。绑定在 127.0.0.1。Vault Lens 默认就是这个提供方、`http`、27123，所以你只要粘贴密钥。 |
| **Omnisearch** 1.30.1 | 已安装、已启用，它的 HTTP 服务**关闭**（默认） | 库内搜索很好（BM25，能容忍错字）。它的 HTTP 端点没有认证，而且 `Access-Control-Allow-Origin: *`，所以任何本机进程或加载的网页都能查询库索引。除非你知道为什么要开，否则保持关闭。真要开，端口是 51361（Vault Lens 快速入门里的「51736」是笔误）。 |

随库的设置：`.obsidian/plugins/obsidian-local-rest-api/data.json` 里只有 `{"enableInsecureServer": true}`。插件第一次加载时生成 API 密钥和一张自签证书，并把它们写进同一个文件，存在你的机器上。

## 安装步骤（8 步）
1. 打开库，关闭受限模式。Local REST API 会和其他插件一起加载。
2. 设置 → Local REST API：确认「非加密（HTTP）服务器」在 27123 上运行。复制那里显示的 API 密钥。
3. 安装 Vault Lens：Chrome 网上应用店（Chrome、Brave、Edge、Arc、Opera）、Firefox 附加组件（2.5.2 及以上）或 Edge 附加组件。链接：https://vaultlens.com/getting-started.html
4. 扩展选项 → 「Obsidian Connection」：提供方选 Local REST API，协议 `http`，端口 `27123`，粘贴 API 密钥。库名等于你打开的那个文件夹名。
5. 等到绿色的「connection established」提示。
6. 验证搜索：在网页上搜一个出现在 `Guide/00 Start Here.md` 里的词。扩展图标变绿，并列出这篇笔记。
7. 验证写入：点扩展侧栏里的日记按钮。笔记应出现在 `01 Journal/Daily/`。如果它是空的（没有日记模板的属性），运行一次 **Templater: Replace templates in the active file**。QuickAdd 捕捉无论哪种都能用。
8. 可选：设置 → 核心插件 → 网页查看器开着。不要在这个内置浏览器里登录敏感网站。

## 安全姿态
- 只监听本机回环。不要设置 `bindingHost`（REST API）或 `DANGER_httpHost`（Omnisearch）。
- 用 27123 的 HTTP，是因为 HTTPS（27124）要每个人导入一张 365 天后过期的自签证书，支持成本会反复出现。想用 HTTPS 的人仍然可以用。
- API 密钥是读写整个库的口令。不要把 Local REST API 的设置页截图分享出去。Vault Lens 把它存在浏览器会同步的扩展存储里。插件里的「Reset all cryptography」会轮换密钥和证书。
- 从浏览器来的编辑会替换整篇笔记。如果同一篇正在 Obsidian 里打开，后写的那次赢。
- 网页查看器是 Chromium 网页视图，Cure53 审计过，广告拦截开着。Obsidian 运行时，第三方插件能读到网页查看器的 cookie。要输密码的网站用你平时的浏览器。

## 发布时的闸门
`scripts/verify_template.py` 拒绝发出一份 Local REST API 设置里带有已生成密钥或证书的副本。`scripts/build_template.py` 每次构建都把那个文件重置为 `{"enableInsecureServer": true}`。见 `scripts/RELEASE.md`。

## 记录在案的异议
1. 给每个打开库的人都打开监听，包括从不装扩展的人，是一项政策选择。更保守的做法是「装了但不启用」，代价是清单上多一步。
2. 预先打开 HTTP，覆盖了插件作者「默认 HTTPS、HTTP 关闭」的立场。回环加上 bearer 密钥，在单人桌面上可以接受。共用的电脑上更弱。
