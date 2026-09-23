# Life OS

*在 Obsidian 里过一整个人生：每晚一组诚实的问题，其余的事跟着来。*


## 快速开始

1. 从 Releases 下载 zip，或克隆这个仓库。仓库根目录就是库。
2. 在 Obsidian 里打开这个文件夹（Open folder as vault）。
3. Obsidian 问到受限模式时，点 **Turn off**。然后运行命令 **Reload app without saving**，十个社区插件和 Life OS 才会亮起。重新加载后 Life OS 会自己打开。
4. 打开 `00 Dashboards/Setup.md`。它会自己检查，并告诉你还剩什么。
5. 今晚：`Ctrl/Cmd+Shift+D` 打开今天的笔记，`Ctrl/Cmd+Shift+Q` 开始提问。按 1 到 10 回答，在 `## 日记` 下写一行。就停在这里。其余的事等 30 天。

带 `example` 标签的笔记是种子数据，好让仪表盘第一次打开就有图。设置清单会提醒你删掉它们。

## 里面有什么

```
00 Dashboards/   设置、罗盘、习惯画布、每日问答、任务、项目、看板、助手
01 Journal/      日、周、季笔记
02 Retreats/     YYYY-QN Personal Retreat（生命之轮写在属性里）
03 Planning/     生命主题、核心价值观（含角色）、理想一周
04 Projects/     项目笔记（任务用 #project/<slug>）和项目看板
05 People/       人物笔记（任务用 #p/<slug>，#discuss 汇总待讨论）
06 Writing/      通讯、视频脚本、文章、课程，各有一块看板
07 Library/      读书笔记（引用带块标识，可以嵌进稿子）
08 Tasks/        Tasks.md，只负责收集、不用手翻的总表
09 Reading/      阅读计划、章、节、研读笔记、主题（圣经是现成例子）
Prompts/         16 条给助手的提示词，一件重复的事一篇笔记
Templates/       Templater 模板；属性列表来自 Meta/Compass Config.md
Meta/            Compass Config.md（唯一配置）、views/*.js（仪表盘小部件）、version.md
Guide/           原则、插件、每条工作流一页、分层顺序、助手、MCP、提示词库
wiki/, inbox/    claude-obsidian 的知识层（可选；没有这个插件时就是普通 Markdown）
scripts/         阅读计划生成器、圣经拆分、模板构建和检查
  .github/         CI（verify）和 issue 模板
CHANGELOG.md, CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md, CREDITS.md, LICENSE, LICENSE-GUIDE.md, THIRD_PARTY_NOTICES.md
.claude-obsidian.json  claude-obsidian 知识层的标记
AGENTS.md        给任何助手的规则和文件夹地图；CLAUDE.md 和 GEMINI.md 指向它
.claude/         settings.json：Claude Code 的只读 MCP 允许名单（没有密钥）
.mcp.example.json  怎样把助手指到 Obsidian 的 MCP 服务（Local REST API）
```

`Meta/Compass Config.md` 是唯一配置：问题、习惯、生命之轮领域、文件夹、前缀、出生日期。仪表盘按前缀发现 `dq_*`、`habit_*`、`wheel_*`，所以改这里的列表，整个库会跟着变。

## 七条工作流

| # | 工作流 | 住在哪里 | 说明 |
| --- | --- | --- | --- |
| 1 | 每日问答日记 | `01 Journal/Daily`，`Templates/Daily Note.md`，`Templates/Daily Questions Prompt.md`，问题在 `Meta/Compass Config.md` | `Guide/03 Workflow - Journaling and Daily Questions.md` |
| 2 | 季度个人静修 | `02 Retreats`，`Templates/Personal Retreat.md` | `Guide/04 Workflow - Personal Retreat.md` |
| 3 | 多尺度计划 | `01 Journal/{Daily,Weekly,Quarterly}`，`03 Planning` | `Guide/05 Workflow - Multi-Scale Planning.md` |
| 4 | 习惯 | 日记里的 `habit_*` 属性，`00 Dashboards/Habit Canvas.md` | `Guide/06 Workflow - Habit Tracking.md` |
| 5 | 每日阅读（圣经是现成例子） | `09 Reading` | `Guide/07 Workflow - Daily Reading.md` |
| 6 | 任务 | `08 Tasks/Tasks.md`，`04 Projects`，`05 People`，`00 Dashboards/Task Dashboard.md` | `Guide/08 Workflow - Task Management.md` |
| 7 | 写作 | `06 Writing/*` 和看板 | `Guide/09 Workflow - Writing.md` |

叠在上面的还有：罗盘仪表盘（`Guide/10`）、看板（`Guide/13`）、库里的助手（`Guide/14`、`Guide/20`）、claude-obsidian 知识层（`Guide/15`）、网页查看器、SEO 和 Vault Lens（`Guide/16`、`Guide/17`），以及 Obsidian MCP 桥（`Guide/19`）。从 `Guide/00 Start Here.md` 开始。

分层规则：先选一条，多半是每日日记，用满 30 天，再加下一条。`Setup.md` 按这个顺序检查。

## 带上的插件

十个社区插件都在 `.obsidian/plugins/` 里，各自有记录的版本和许可证，并列为启用。是否与上游逐字节一致，是另一次发布检查。一等的 `life-os-app` 和它们放在一起。第一次打开要核对的步骤在 `Guide/02 Plugins.md`。

| 插件 | Id | 版本 | 许可证 |
| --- | --- | --- | --- |
| Dataview | `dataview` | 0.5.68 | MIT |
| Templater | `templater-obsidian` | 2.25.0 | AGPL-3.0 |
| Periodic Notes | `periodic-notes` | 0.0.17 | MIT |
| QuickAdd | `quickadd` | 2.23.0 | MIT |
| Tasks | `obsidian-tasks-plugin` | 8.4.0 | MIT |
| Kanban | `obsidian-kanban` | 2.0.51 | GPL-3.0 |
| Omnisearch | `omnisearch` | 1.30.1 | GPL-3.0 |
| Local REST API | `obsidian-local-rest-api` | 5.1.0 | MIT |
| Agent Client | `agent-client` | 0.12.1 | Apache-2.0 |
| SEO | `seo` | 0.5.6 | MIT |

一等的 Life OS 应用（`life-os-app`）单独标版本，许可证是 MIT。它负责导航、捕捉和实时仪表盘。见 `Guide/21 Life OS Application.md`。

上游仓库和发布标签在 `THIRD_PARTY_NOTICES.md`。Obsidian 本身不包含在内。

## 库里的助手

- `AGENTS.md` 是给任何助手的正式说明：文件夹、属性约定、安全规则（先读再写，改之前要问，不重写日记和计划正文）。`CLAUDE.md` 和 `GEMINI.md` 指向它。
- `Prompts/` 有 16 件重复的工作，一件一篇（晨间启动、晚间教练、周回顾、静修准备和引导、任务分拣、会前准备、项目启动、看板整理、写作、发布前 SEO、研究归档、趋势、今天最重要的事、库健康检查、新手引导）。每篇有自己的 `risk` 和一个按钮。见 `Guide/20 Prompt Library.md`。
- Agent Client（`agent-client`）通过 Agent Client Protocol 在本机跑助手，把聊天放在侧栏或笔记里。每次修改都以差异出现，并需要批准。自动批准默认关闭。见 `Guide/14 Agent Client and Claude Code.md`。这套库另加了一条 Grok 自定义助手，命令是 `grok`，参数是 `agent` 和 `stdio`。本机要先装好 Grok 命令行。
- Obsidian MCP 桥：Local REST API 5.x 在 `http://127.0.0.1:27123/mcp` 提供 MCP（16 个工具：打开笔记、运行命令、搜索、读取、补丁）。`.mcp.example.json` 是客户端配置示例。`.claude/settings.json` 为 Claude Code 预先允许只读工具。见 `Guide/19 Obsidian MCP Bridge.md`。
- 仓库里不放密钥。Local REST API 在第一次加载时为本机生成密钥。每个人在自己的助手里登记这个服务（Claude Code 用 `claude mcp add --scope user ...`），密钥留在库外面。`.mcp.json`、助手会话和导出的聊天被 `.gitignore` 和构建脚本排除。

## 构建和发布

![verify](https://github.com/losebird/lifeos/actions/workflows/verify.yml/badge.svg)

模板从维护者正在使用的库构建，不要去改构建出来的那一份：

```bash
python3 scripts/verify_release_safety.py
python3 scripts/build_template.py --out ../life-os-releases --name LifeOS-1.1.0-candidate --version 1.1.0 --zip
python3 scripts/verify_template.py ../life-os-releases/LifeOS-1.1.0-candidate
```

`build_template.py` 按丢弃规则复制，用户文件夹里只留带 `example` 标签的笔记，重置默认值，从插件设置里去掉这台机器的状态，写上版本和一页工作区，然后检查并打包。`verify_template.py` 有任何失败就以退出码 1 结束：禁止的字符串（姓名、路径、密钥、证书、长破折号）、插件设置（Local REST API 必须正好是 `{"enableInsecureServer": true}`，Agent Client 没有会话且自动批准关闭，Omnisearch 的 HTTP 服务关闭，QuickAdd 的在线功能关闭）、插件文件夹里有 LICENSE、声明与清单一致、引用的路径和维基链接能解析、`Meta/views/*.js` 能通过 Node 语法检查、总体积小于 20 MB。`verify` 工作流在每次推送和拉取请求时运行。维护者清单：`scripts/RELEASE.md`。变更记录：`CHANGELOG.md`。

没有原地升级器。先完整备份库，把新版本解压到旁边，再对照着搬个人内容、自定义配置和模板。不要整个替换正在使用的 `.obsidian` 文件夹。备份要恢复成功一次，才算数。见 `scripts/RELEASE.md` 和 `Guide/23 Native Acceptance.md`。

## 出处和许可证

工作流跟随 Mike Schmitz 的公开视频（Practical PKM）。每日问答：Marshall Goldsmith 与 Mark Reiter，*Triggers*（2015）。多尺度计划：Cal Newport。完整出处在 `CREDITS.md`。

代码、模板、仪表盘、脚本和配置是 MIT（`LICENSE`）。`Guide/` 里的说明是 CC BY 4.0（`LICENSE-GUIDE.md`）。`.obsidian/plugins/` 里的第三方插件二进制保持各自的许可证。见 `THIRD_PARTY_NOTICES.md`。社区规则：`CODE_OF_CONDUCT.md`。

贡献：`CONTRIBUTING.md`。安全：`SECURITY.md`。
