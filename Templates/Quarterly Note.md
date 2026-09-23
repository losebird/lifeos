---
quarter: <% tp.file.title %>
retreat: "[[02 Retreats/<% tp.file.title %> Personal Retreat]]"
focus_area: 
tags:
  - quarterly
---
« [[01 Journal/Quarterly/<% moment(tp.file.title, "YYYY-[Q]Q").subtract(1, "quarter").format("YYYY-[Q]Q") %>|上季]] · [[Compass Dashboard|罗盘]] · [[01 Journal/Quarterly/<% moment(tp.file.title, "YYYY-[Q]Q").add(1, "quarter").format("YYYY-[Q]Q") %>|下季]] »

<% moment(tp.file.title, "YYYY-[Q]Q").startOf("quarter").format("MMM D") %> to <% moment(tp.file.title, "YYYY-[Q]Q").endOf("quarter").format("MMM D, YYYY") %> · Retreat: [[02 Retreats/<% tp.file.title %> Personal Retreat]]

> [!theme]- 生命主题和核心价值观
> ![[Life Theme#Theme]]
> ![[Core Values#Values]]

```agent
type: button
text: "准备这次静修"
prompt: "Read Prompts/04 Retreat Prep.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## 本季意图
在个人静修时写下。抄到这里，或嵌入静修那一节，周记才能引用。
![[<% tp.file.title %> Personal Retreat#5. 下个季度的意图]]

## 焦点领域（来自生命之轮）
- 

## 本季项目
```dataview
TABLE WITHOUT ID file.link AS Project, status, area, due
FROM "04 Projects"
WHERE quarter = "<% tp.file.title %>" AND status != "done"
SORT due ASC
```

## 各周
```dataview
LIST
FROM "01 Journal/Weekly"
WHERE quarter = "<% tp.file.title %>"
SORT file.name ASC
```

## 本季每日问答
```dataviewjs
await dv.view("Meta/views/dailyquestions", { from: "<% moment(tp.file.title, "YYYY-[Q]Q").startOf("quarter").format("YYYY-MM-DD") %>", to: "<% moment(tp.file.title, "YYYY-[Q]Q").endOf("quarter").format("YYYY-MM-DD") %>" });
```

## 季末笔记
带到下一次个人静修的回顾里。
- 
