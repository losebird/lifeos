这个库从零实现了 Mike Schmitz 在 **"How I Run My Whole Life Out of Obsidian"**（Practical PKM，2026-06-26）里讲的系统：https://www.youtube.com/watch?v=-h7ZAuuNDLE。独立实现，出处见 `CREDITS.md`。

刚来？先打开 [[Setup]]。里面有状态清单，以及第 1 天、第 1 周、第 1 个月怎么做。这一页是地图。

七条工作流，一个库，上面是仪表盘：

| # | 工作流 | 住在哪里 | 说明 |
| --- | --- | --- | --- |
| 1 | 每日问答日记 | `01 Journal/Daily`，`Templates/Daily Note.md`，`Templates/Daily Questions Prompt.md`，问题在 `Meta/Compass Config.md` | [[03 Workflow - Journaling and Daily Questions]] |
| 2 | 季度个人静修 | `02 Retreats`，`Templates/Personal Retreat.md` | [[04 Workflow - Personal Retreat]] |
| 3 | 多尺度计划 | `01 Journal/{Daily,Weekly,Quarterly}`，`03 Planning` | [[05 Workflow - Multi-Scale Planning]] |
| 4 | 习惯 | 日记里的 `habit_*` 属性，`00 Dashboards/Habit Canvas.md` | [[06 Workflow - Habit Tracking]] |
| 5 | 每日阅读（圣经是现成例子） | `09 Reading` | [[07 Workflow - Daily Reading]] |
| 6 | 任务 | `08 Tasks/Tasks.md`，`04 Projects`，`05 People`，`00 Dashboards/Task Dashboard.md` | [[08 Workflow - Task Management]] |
| 7 | 写作 | `06 Writing/*` 和看板 | [[09 Workflow - Writing]] |
| + | 罗盘仪表盘 | `00 Dashboards/Compass Dashboard.md`，`Meta/views/*.js` | [[10 Compass Dashboard]] |
| + | 看板 | `04 Projects/Projects Board.md`，`06 Writing/*/… Board.md`，`00 Dashboards/Boards.md` | [[13 Kanban Boards]] |
| + | 库里的助手 | `AGENTS.md`，`Prompts/`，`00 Dashboards/Assistant.md` | [[14 Agent Client and Claude Code]]，[[20 Prompt Library]] |
| + | 知识层（claude-obsidian） | `wiki/`，`inbox/`，`wiki/routing-map.md` | [[15 claude-obsidian]] |
| + | 研究和发布 | 网页查看器、SEO、Vault Lens | [[16 SEO, Web Viewer, and Vault Lens]]，[[17 Search Providers]] |
| + | Obsidian MCP 桥 | Local REST API `/mcp`，`.mcp.example.json` | [[19 Obsidian MCP Bridge]] |
| + | Life OS 应用 | 导航、捕捉、今天的实时状态，以及受约束的助手入口 | [[21 Life OS Application]] |

接下来读：[[01 Principles]]（背后的想法），[[02 Plugins]]（装了什么、第一次打开要核对什么），[[11 Build Order]]（为什么一次只加一层），[[12 Resources and Links]]。

## 分层
上面这些，原作者用了五年。先选一条，多半是每日日记，用满 30 天，再加下一条。[[Setup]] 按这个顺序检查。

## 维护者
发布包用 `scripts/build_template.py` 生成，并由 `scripts/verify_template.py` 把关。见 `scripts/RELEASE.md`。
