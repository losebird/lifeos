---
week: <% tp.file.title %>
quarter: <% moment(tp.file.title, "gggg-[W]ww").format("YYYY-[Q]Q") %>
tags:
  - weekly
---
« [[01 Journal/Weekly/<% moment(tp.file.title, "gggg-[W]ww").subtract(1, "week").format("gggg-[W]ww") %>|上周]] · [[01 Journal/Quarterly/<% moment(tp.file.title, "gggg-[W]ww").format("YYYY-[Q]Q") %>|本季]] · [[Compass Dashboard|罗盘]] · [[01 Journal/Weekly/<% moment(tp.file.title, "gggg-[W]ww").add(1, "week").format("gggg-[W]ww") %>|下周]] »

# 第 <% moment(tp.file.title, "gggg-[W]ww").format("w") %> 周，<% moment(tp.file.title, "gggg-[W]ww").format("gggg") %>
<% moment(tp.file.title, "gggg-[W]ww").startOf("week").format("MMM D") %> to <% moment(tp.file.title, "gggg-[W]ww").endOf("week").format("MMM D") %>

Days: <%* const s = moment(tp.file.title, "gggg-[W]ww").startOf("week"); const parts = []; for (let i = 0; i < 7; i++) parts.push(`[[01 Journal/Daily/${s.clone().add(i, "day").format("YYYY-MM-DD")}|${s.clone().add(i, "day").format("ddd")}]]`); tR += parts.join(" · "); %>

> [!intention]- 本季意图
> ![[01 Journal/Quarterly/<% moment(tp.file.title, "gggg-[W]ww").format("YYYY-[Q]Q") %>#本季意图]]

## 本周意图
这周做成这三件事，本季意图才会往前。
1. 
2. 
3. 

## 理想一周核对
对照 [[Ideal Week|理想一周]]。上面的意图这周具体落在哪段时间？现在改日历，不要拖到周四。

- 

## 本周到期
```tasks
not done
due after <% moment(tp.file.title, "gggg-[W]ww").startOf("week").subtract(1, "day").format("YYYY-MM-DD") %>
due before <% moment(tp.file.title, "gggg-[W]ww").endOf("week").add(1, "day").format("YYYY-MM-DD") %>
sort by due
group by filename
```

```agent
type: button
text: "回顾这一周"
prompt: "Read Prompts/03 Weekly Review.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## 周末回顾
周末做。每天的努力分和习惯，来自日记。
```dataviewjs
await dv.view("Meta/views/week", { week: dv.current().file.name });
```

### 顺利的事

### 不顺的事

### 本周的胜利
```dataview
LIST L.text
FROM "01 Journal/Daily"
FLATTEN file.lists AS L
WHERE L.section.subpath = "胜利" AND file.day >= date(<% moment(tp.file.title, "gggg-[W]ww").startOf("week").format("YYYY-MM-DD") %>) AND file.day <= date(<% moment(tp.file.title, "gggg-[W]ww").endOf("week").format("YYYY-MM-DD") %>)
SORT file.name ASC
```
