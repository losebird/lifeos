---
cssclasses:
  - lifeos-dashboard
---
下面的内容都从你已经写下的笔记生成。改日记模板、静修笔记或配置，这一页会跟着变。

```dataviewjs
await dv.view("Meta/views/quicklinks");
```

> [!theme] 生命主题
> ![[Life Theme#Theme]]

## 生命之轮（本季静修）
```dataviewjs
await dv.view("Meta/views/wheel");
```

## 每日问答
日记里每个 `dq_*` 的折线和平均。可以开关某一题，也可以换时间范围。
```dataviewjs
await dv.view("Meta/views/dailyquestions", { days: 30 });
```

## 习惯
```dataviewjs
await dv.view("Meta/views/habits", { days: 21 });
```

## 看板
```dataviewjs
await dv.view("Meta/views/boards", { compact: true });
```

## 死亡提醒
```dataviewjs
await dv.view("Meta/views/memento");
```

## 问
打开 [[Assistant|助手]] 看全部提示词，或用下面的按钮（需要 Agent Client 和一个已配置的助手）：
```agent
type: button
text: "今天最重要的事"
prompt: "Read Prompts/14 What Matters Today.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```
```agent
type: button
text: "回顾这一周"
prompt: "Read Prompts/03 Weekly Review.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## 相关仪表盘
- [[Habit Canvas|习惯画布]]
- [[Daily Questions|每日问答]]
- [[Task Dashboard|任务]]
- [[Projects Dashboard|项目]]
- [[Boards|看板]]
- [[Assistant]]
- [[Setup]]
- [[Ideal Week]] · [[Core Values]] · [[Life Theme]]
