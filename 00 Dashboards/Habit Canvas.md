习惯记在日记的勾选属性里（`habit_*`）。没有单独的应用，没有提醒，也不用为连续天数羞愧。这一页只画出已经记下的东西。没做到的原因，就在同一天的日记旁边。

## 近 8 周
```dataviewjs
await dv.view("Meta/views/habits", { days: 56 });
```

## 近 2 周
```dataviewjs
await dv.view("Meta/views/habits", { days: 14 });
```

## 改你在追踪的习惯
1. 打开 [[Compass Config|配置]]。
2. 在 `habits` 列表里增减（保持 `habit_` 前缀）。显示名写在 `labels` 里。
3. 完成。新日记会带上新的勾选，这一页会自动认出来。

一个季节追踪一小撮（3 到 5 个）。诚实比完美重要。

## 问
```agent
type: button
text: "看看问题和习惯的趋势"
prompt: "Read Prompts/13 Trend Analysis.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```
