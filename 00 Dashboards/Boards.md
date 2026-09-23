库里每一块看板都直接从看板文件读出来。卡片从左拖到右。算作做完的泳道名写在配置的 `board_done_lanes` 里，默认是 `Done`、`Published`、`Archive`。看板就是 Markdown。泳道标题先留着英文，除非你同时改这个属性。

```agent
type: button
text: "整理看板"
prompt: "Read Prompts/09 Board Grooming.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## 总览
```dataviewjs
await dv.view("Meta/views/boards", { compact: true });
```

## 项目
```dataviewjs
await dv.view("Meta/views/boards", { folder: "04 Projects" });
```

## 写作
```dataviewjs
await dv.view("Meta/views/boards", { folder: "06 Writing" });
```

## 新增一块看板
1. 随便建一篇笔记，打开命令面板，运行 **Kanban: Create new board**（或在属性里加上 `kanban-plugin: board`）。
2. 给泳道起名。做完的泳道放在最后，名字用 `Done` 或 `Published`，小部件才会把它们算成完成。要改这份名单，编辑 [[Compass Config|配置]] 里的 `board_done_lanes`。
3. 可选：在看板设置里指定新笔记的文件夹和模板，这样从卡片生成的笔记会用对模板。
