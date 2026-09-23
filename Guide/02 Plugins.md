## 视频里点名的
| 插件 | 社区 ID | 用来做什么 | 配置在哪 |
| --- | --- | --- | --- |
| **QuickAdd** | `quickadd` | 把日记、胜利、感恩收进当天笔记；任务收进总表；想法收进看板待办（4:40，17:51） | `.obsidian/plugins/quickadd/data.json`（8 个捕捉选项，都登记成了命令） |
| **Periodic Notes** | `periodic-notes` | 日、周、季笔记，各自的模板和文件夹（9:16） | `.obsidian/plugins/periodic-notes/data.json` |
| **Obsidian Tasks** | `obsidian-tasks-plugin` | 行内任务，仪表盘、人物、项目和阅读提示里的 `tasks` 查询（14:37） | `.obsidian/plugins/obsidian-tasks-plugin/data.json` |
| **Dataview**（DataviewJS） | `dataview` | 习惯仪表盘、每日问答、生命之轮、项目仪表盘（10:47，18:49） | `.obsidian/plugins/dataview/data.json`，已打开 JavaScript |
| **Kanban** | `obsidian-kanban` | 每种写作一块看板（17:44） | `06 Writing/*/… Board.md` |
| **Bases**（核心，Obsidian 1.9 及以上） | 内置 | Mike 在日记里的「往年今日」查询（5:01） | 这个库用 DataviewJS 做往年今日，所以任何版本都能用。下面有一段可换成 Bases 的写法 |

## 视频之后加上的（主人的选择）
| 插件 | ID | 用来做什么 | 说明 |
| --- | --- | --- | --- |
| **Agent Client** 0.12.1 | `agent-client` | 在 Obsidian 里跑本地助手；仪表盘上的按钮和嵌入聊天 | [[14 Agent Client and Claude Code]] |
| **SEO** 0.5.6 | `seo` | 发布前检查 `06 Writing` 里的笔记 | [[16 SEO, Web Viewer, and Vault Lens]] |
| **Omnisearch** 1.30.1 | `omnisearch` | 更好的库内搜索；给 Vault Lens 当搜索提供方 | [[17 Search Providers]] |
| **Local REST API** 5.1.0 | `obsidian-local-rest-api` | 让 Vault Lens 从浏览器预览和编辑笔记；也是一般的本地接口 | [[17 Search Providers]] |
| **网页查看器**（核心） | `webviewer` | 在 Obsidian 里浏览和剪藏 | [[16 SEO, Web Viewer, and Vault Lens]] |

## 为了让模板能工作而加上的
| 插件 | ID | 为什么 |
| --- | --- | --- |
| **Templater** | `templater-obsidian` | Mike 说的是「模板文件」。Periodic Notes 需要模板引擎来算周记和季记的日期。晚间问答（把 1 到 10 写进属性，他在 4:29 说的自定义快捷键）是一段 Templater 脚本。文件夹模板会自动套上项目、人物、静修和写作模板。 |

## 一等应用
| 插件 | ID | 为什么 |
| --- | --- | --- |
| **Life OS** | `life-os-app` | 应用壳、固定导航、统一捕捉、实时状态，以及不另建数据库的工作流面板。它读的是和仪表盘同一份 Markdown 和属性。见 [[21 Life OS Application]]。 |

链接：QuickAdd https://github.com/chhoumann/quickadd · Periodic Notes https://github.com/liamcain/obsidian-periodic-notes · Tasks https://github.com/obsidian-tasks-group/obsidian-tasks · Dataview https://github.com/blacksmithgu/obsidian-dataview · Kanban https://github.com/mgmeyers/obsidian-kanban · Templater https://github.com/SilentVoid13/Templater

## 第一次打开要核对的
十个社区插件和 Life OS 已经装在 `.obsidian/plugins/` 里，并在 `community-plugins.json` 里列为启用。

1. 设置 → 第三方插件 → **关闭受限模式**（Obsidian 每个库问一次，这个选择不存在库文件里）。如果插件没有马上亮起，运行 **Reload app without saving**。库布局就绪后 Life OS 会自己打开。之后用罗盘图标或命令 **打开 Life OS 首页** 再打开。
2. 设置 → 外观 → CSS 片段：确认 `lifeos` 开着（自定义提示：`reading`、`intention`、`memento`、`theme`）。
3. Templater：确认 **新建文件时触发 Templater** 和 **文件夹模板** 开着。
4. Periodic Notes：日记 `YYYY-MM-DD` → `01 Journal/Daily`，周记 `gggg-[W]ww` → `01 Journal/Weekly`，季记 `YYYY-[Q]Q` → `01 Journal/Quarterly`，各自挂上模板。核心的 Daily Notes 插件是关的。创建笔记走下面的 QuickAdd 命令，它们会在新笔记上跑 Templater。Periodic Notes 和日历用来浏览。如果从链接打开的笔记是空的，或还显示 `<%` 代码，按 `Alt+E`（Templater: Insert template）选对应模板。
5. QuickAdd：确认二十个选项都在，并且每个都打开了闪电形的「命令」开关。八个往已有笔记里追加，四个打开周期笔记，八个用模板创建项目、人物、写作、读书笔记或研读笔记。
6. Dataview：**启用 JavaScript 查询** 已打开（预置）。
7. 打开 `00 Dashboards/Compass Dashboard.md`。小部件如果写着还没有数据，那是空状态，不是报错。

## 快捷键（预先写在 `.obsidian/hotkeys.json`）
| 按键 | 做什么 |
| --- | --- |
| Ctrl/Cmd+Shift+L | 打开 Life OS |
| Ctrl/Cmd+Shift+C | 打开统一捕捉 |
| Ctrl/Cmd+Shift+D | 创建或打开今天的日记（QuickAdd 通过 Templater 跑模板） |
| Ctrl/Cmd+Alt+W | 创建或打开本周笔记 |
| Ctrl/Cmd+Alt+Q | 创建或打开本季笔记 |
| Ctrl/Cmd+Shift+J | 记一笔（带时间，写入今天的笔记） |
| Ctrl/Cmd+Shift+W | 记一个胜利 |
| Ctrl/Cmd+Shift+G | 记一条感恩 |
| Ctrl/Cmd+Shift+T | 把任务加进总表 |
| Ctrl/Cmd+Shift+Q | 晚间问答（先打开今天的日记） |

在设置 → 快捷键里改。重新加载后生效。

以后更新插件：设置 → 第三方插件 → 检查更新，和平时一样。

## QuickAdd 捕捉选项（如果预置配置被拒绝，按这张表重建）
名字要和现在的选项一致。仪表盘上的按钮是按名字找到它们的。

| 名字 | 写到哪里 | 格式 | 追加到哪个标题后 |
| --- | --- | --- | --- |
| 📝 记一笔 | `01 Journal/Daily/{{DATE:YYYY-MM-DD}}.md`（用日记模板创建） | `- {{DATE:HH:mm}} {{VALUE}}` | `## 日记` |
| 🏆 记一个胜利 | 同上 | `- {{VALUE}}` | `## 胜利` |
| 🙏 感恩 | 同上 | `- {{VALUE}}` | `## 感恩` |
| ✅ 添加任务（总表） | `08 Tasks/Tasks.md` | `- [ ] {{VALUE}} ➕ {{DATE:YYYY-MM-DD}}` | `## 收件箱` |
| ✉️ Newsletter idea | `06 Writing/Newsletters/Newsletter Board.md` | `- [ ] {{VALUE}}` | `## Backlog` |
| 🎬 Video idea | `06 Writing/YouTube Scripts/YouTube Board.md` | `- [ ] {{VALUE}}` | `## Backlog` |
| 📰 Article idea | `06 Writing/Articles/Article Board.md` | `- [ ] {{VALUE}}` | `## Backlog` |
| 💡 Project idea | `04 Projects/Projects Board.md` | `- [ ] {{VALUE}}` | `## Ideas` |
| 📅 打开今天的笔记、🗓️ 本周、🧭 本季、🏕️ 新建本季静修 | 模板选项：在正确的文件夹里按日期名从模板创建，跑 Templater，然后打开。已存在就只打开 | | |
| 📁 New project | `04 Projects/{{VALUE}}.md`，来自 `Templates/Project.md` | 询问项目名，创建并打开。同名笔记不会被覆盖 | |
| 👤 New person | `05 People/{{VALUE}}.md`，来自 `Templates/Person.md` | 询问人名，创建并打开。同名笔记不会被覆盖 | |
| ✉️ New newsletter | `06 Writing/Newsletters/{{VALUE}}.md`，来自 `Templates/Newsletter.md` | 询问标题，创建并打开。同名笔记不会被覆盖 | |
| 🎬 New video script | `06 Writing/YouTube Scripts/{{VALUE}}.md`，来自 `Templates/YouTube Script.md` | 询问标题，创建并打开。同名笔记不会被覆盖 | |
| 📰 New article | `06 Writing/Articles/{{VALUE}}.md`，来自 `Templates/Article.md` | 询问标题，创建并打开。同名笔记不会被覆盖 | |
| 🎓 New course lesson | `06 Writing/Course Content/{{VALUE}}.md`，来自 `Templates/Course Lesson.md` | 询问标题，创建并打开。同名笔记不会被覆盖 | |
| 📚 New book note | `07 Library/Book Notes/{{VALUE}}.md`，来自 `Templates/Book Note.md` | 询问标题，创建并打开。同名笔记不会被覆盖 | |
| 📖 New study note | `09 Reading/Study Notes/{{VALUE}}.md`，来自 `Templates/Study Note.md` | 询问标题，创建并打开。同名笔记不会被覆盖 | |

看板那几行的 `## Backlog` 和 `## Ideas` 是 QuickAdd 要寻找的标题，必须和看板文件里的二级标题一致。不要只改说明、不改看板。

仪表盘的捕捉按钮在点击时按名字找这些选项，所以选项的内部 id 可以改，显示名字要和按钮对得上。

## 用 Bases 做「往年今日」（可选替换）
创建 `Meta/On This Day.base`，在日记模板里用 `![[On This Day.base]]` 嵌入：
```yaml
filters:
  and:
    - file.inFolder("01 Journal/Daily")
    - file.name != this.file.name
    - file.name.endsWith(this.file.name.slice(4))
views:
  - type: table
    name: On this day
    order:
      - file.name
    sort:
      - property: file.name
        direction: DESC
```
Bases 的公式语法还在变。按你的 Obsidian 版本对照 https://help.obsidian.md/bases/functions。
