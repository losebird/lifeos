---
type: project
status: active
area: 
quarter: <% tp.date.now("YYYY-[Q]Q") %>
started: <% tp.date.now("YYYY-MM-DD") %>
due: 
people: []
tags:
  - project
---
<%*
var slug = String(tp.file.title || "").trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "") || "untitled";
%>
在库里任何地方给任务加上 `#project/<% slug %>`，它们会汇总到这里。

```agent
type: button
text: "启动这个项目"
prompt: "Read Prompts/08 Project Kickoff.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## 结果
完成后是什么样：
- 

## 下一步
```tasks
not done
tags include #project/<% slug %>
sort by due
```

## 笔记里的任务
- [ ] 第一步 #project/<% slug %>

## 笔记


## 日志
- <% tp.date.now("YYYY-MM-DD") %> 创建。

## 已完成
```tasks
done
tags include #project/<% slug %>
sort by done reverse
limit 20
```
