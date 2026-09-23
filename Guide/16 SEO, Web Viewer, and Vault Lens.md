这三样让这个库在生活工作流之上，还能用来研究和发布。

## 网页查看器（核心插件，Obsidian 1.8 及以上）
已在 `core-plugins.json` 里启用。`.obsidian/webviewer.json` 让外部链接在查看器里打开，广告拦截开着，保存的页面进 `07 Library`（这些键是从公开库里观察到的，不是官方文档；在你的版本里到设置里拨一次开关确认）。在 Obsidian 里打开链接，让浏览器页和草稿并排，把一页存成笔记（「Save to vault」），可以和官方 Web Clipper 配合。设置 → 核心插件 → 网页查看器：选择外部链接是否在查看器里打开、搜索引擎，以及清除浏览数据。

## SEO（`seo` 0.5.6，https://github.com/davidvkimball/obsidian-seo）
检查准备发布的笔记：标题和描述的长度、关键词是否出现在标题、描述和 slug 里、标题层级、图片替代文本、断链和裸链接、重复标题、阅读难度、字数。分数从 40 到 100。
- 命令：**Run current note audit**（检查当前笔记）、**Run vault audit**（检查整个库）。命令面板里的英文名字不要改，程序认的是它们。
- 设置 → SEO → 扫描目录：设成 `06 Writing`（如果也发布读书笔记，再加上 `07 Library`）。日记文件夹不要放进去，它们不是给搜索引擎的。
- 外部链接检查默认关闭，而且需要联网。模板里保持关闭。
- 它读取的前置属性：`title`、`description`、`slug`、`keywords`（可在设置里改）。写作模板现在带的是 `subject`、`meta_description`、`slug`。想让草稿有分数，就在设置 → SEO 里把属性名对齐。
- 属于作者的 Vault CMS 项目，不绑定任何发布平台。

## Vault Lens（浏览器扩展，旧名「Obsidian Search for Web」）
https://github.com/jk-oster/obsidian-search-for-web。在网页搜索结果旁边，以及你再次打开的页面上，显示库里匹配的笔记。需要库这一侧有一个提供方。安全审查和安装步骤见 [[17 Search Providers]]。

## 合在一起
用网页查看器读，用 Web Clipper 和 Vault Lens 捕捉并再次浮现，用 [[14 Agent Client and Claude Code]] 在 `06 Writing` 里起草，发布离开库之前用 SEO 检查。
