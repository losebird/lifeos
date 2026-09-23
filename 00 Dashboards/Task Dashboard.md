这一页是**推荐清单**，不是执行今天的地方。看一遍，选出真正要做的事，再把它排进日历或纸上。

```agent
type: button
text: "整理收件箱"
prompt: "Read Prompts/06 Task Triage.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```
```agent
type: button
text: "今天最重要的事"
prompt: "Read Prompts/14 What Matters Today.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

用 QuickAdd 的**添加任务**把事情收进 [[Tasks|总表]]。用 `#project/<slug>` 或 `#p/<人物>` 把任务送回它的上下文。中文标题会留在标签里。下面的查询按时间把该看的任务捞出来。

## 逾期
```tasks
not done
path does not include wiki/
due before today
sort by due
group by filename
```

## 今天
```tasks
not done
path does not include wiki/
(due on today) OR (scheduled on today)
path does not include 09 Reading/Reading Plan
sort by priority
group by filename
```

## 未来 7 天
```tasks
not done
path does not include wiki/
due after today
due before in 8 days
sort by due
group by due
```

## 待讨论（按人）
```tasks
not done
path does not include wiki/
tags include #discuss
group by tags
sort by created
```

## 高优先级但没有日期
```tasks
not done
path does not include wiki/
no due date
(priority is high) OR (priority is highest)
group by filename
```

## 收件箱（无标签、无日期，需要归位）
```tasks
not done
path does not include wiki/
path includes 08 Tasks/Tasks
no due date
tags do not include #project
tags do not include #p/
limit 25
```

## 本周完成
```tasks
done after 7 days ago
path does not include wiki/
group by done
```
