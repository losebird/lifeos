---
type: book
author: 
year: 
rating: 
status: reading
started: <% tp.date.now("YYYY-MM-DD") %>
finished: 
tags:
  - book
---
## 三句话摘要


## 关键想法
- 

## 引用
每条引用后面加一个块标识，写作时就可以直接嵌进来，不用离开这个库。

> "" ^quote-1

## 这会改变我做什么
- 

```agent
type: button
text: "把这一页归档进知识库"
prompt: "Read Prompts/12 Research Capture.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## 用到它的写作
```dataview
LIST
FROM "06 Writing"
WHERE contains(file.outlinks, this.file.link)
```
