---
type: person
role: 
company: 
email: 
meets: 
tags:
  - person
---
<%*
var slug = String(tp.file.title || "").trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "") || "untitled";
%>
标签：`#p/<% slug %>`

要记住和这个人谈的事，在库里任何地方写成带 `#discuss #p/<% slug %>` 的任务。见面前打开这篇笔记。

```agent
type: button
text: "为这次见面做准备"
prompt: "Read Prompts/07 Meeting Prep.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## 待讨论
```tasks
not done
tags include #discuss
tags include #p/<% slug %>
sort by created
```

## 和此人有关的未完成任务
```tasks
not done
tags include #p/<% slug %>
tags do not include #discuss
sort by due
```

## 共同项目
```dataview
LIST
FROM "04 Projects"
WHERE contains(people, this.file.link) AND status != "done"
```

## 笔记


## 见面记录
- <% tp.date.now("YYYY-MM-DD") %> 
