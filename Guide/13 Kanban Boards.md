插件：Kanban 2.0.51（`obsidian-kanban`，仓库现为 https://github.com/community-archive/obsidian-kanban，原为 mgmeyers）。看板是普通 Markdown：每个 `## 标题` 是一条泳道，每一行 `- [ ]` 是一张卡片。没有插件也能搜索、链接和阅读。

## 这个库里的看板
| 看板 | 说明里的泳道 | 从哪里进来 |
| --- | --- | --- |
| `04 Projects/Projects Board` | Ideas → This quarter → In progress → Waiting on someone → Done | QuickAdd 的项目想法。卡片链到项目笔记 |
| `06 Writing/Newsletters/Newsletter Board` | Backlog → Outlining → Drafting → Editing → Ready to publish → Published | QuickAdd 的通讯想法 |
| `06 Writing/YouTube Scripts/YouTube Board` | 同上 | QuickAdd 的视频想法 |
| `06 Writing/Articles/Article Board` | 同上 | QuickAdd 的文章想法 |
| `06 Writing/Course Content/Course Board` | 同上 | 手动 |

当前文件里的泳道如果比这张表短，以文件里的 `##` 标题为准。完成态的名字必须出现在 [[Compass Config]] 的 `board_done_lanes` 里，默认是 `Done,Published,Archive`。泳道标题不要改成中文，除非同时改这个属性，以及 QuickAdd 里「追加到哪个标题后面」的设置。

## 怎么接上
- 全局默认在 `.obsidian/plugins/obsidian-kanban/data.json`：用 `@` 写的日期（例如 `@{2026-09-30}`）会链到日记，显示相对日期，归档时盖上日期。
- 每块看板自己的设置（底部的 `%% kanban:settings %%`）指定**新笔记文件夹**和**笔记模板**。从通讯看板把卡片转成笔记，会在 `06 Writing/Newsletters` 里用 `Templates/Newsletter.md` 创建。
- `Meta/views/boards.js` 读取所有属性里带 `kanban-plugin` 的笔记，并显示每条泳道的卡片数。罗盘上是紧凑版，[[Boards]] 上是完整版。

## 做法（视频 17:42）
- 一种工作一块看板，放在那种工作的文件夹里。想法进待办，从左拖到右。卡片进到 Published，表示东西真的发出去了。
- 卡片是指针。工作在卡片链到的笔记里，不在卡片的文字里。
- 静修时归档做完的卡片，让看板只表示现在。

## 给模板维护者
插件的 README 说它在找新的维护者。它在当前 Obsidian 上能用，格式是普通 Markdown。万一插件坏了，看板仍然是可读的列表，可以搬到别的看板插件（例如 Bases 的看板视图），数据不会丢。
