---
date: <% tp.date.now("YYYY-MM-DD") %>
quarter: <% tp.file.title.slice(0, 7) %>
tags:
  - retreat
<%* const _cf = app.vault.getAbstractFileByPath("Meta/Compass Config.md"); const _cfg = _cf ? (app.metadataCache.getFileCache(_cf)?.frontmatter ?? {}) : {}; const _ws = Array.isArray(_cfg.wheel_areas) && _cfg.wheel_areas.length ? _cfg.wheel_areas : ["wheel_health","wheel_relationships","wheel_family","wheel_career","wheel_finances","wheel_growth","wheel_fun","wheel_meaning"]; tR += _ws.map(k => k + ": ").join("\n"); %>
---
> 这篇笔记要命名为 `YYYY-QN Personal Retreat`（例如 `2026-Q3 Personal Retreat`）。罗盘靠这个文件名找到本季静修，并从上面的 `wheel_*` 属性画生命之轮。文件名格式不要改。

上一次静修：[[02 Retreats/<% moment(tp.file.title.slice(0, 7), "YYYY-[Q]Q").subtract(1, "quarter").format("YYYY-[Q]Q") %> Personal Retreat]] · 本季笔记：[[01 Journal/Quarterly/<% tp.file.title.slice(0, 7) %>]] · 去年同一季：[[02 Retreats/<% moment(tp.file.title.slice(0, 7), "YYYY-[Q]Q").subtract(1, "year").format("YYYY-[Q]Q") %> Personal Retreat]]

留出一整天。不需要躲进树林：几个小时、这一篇文档，以及愿意回答难的问题。

```agent
type: button
text: "准备这次静修"
prompt: "Read Prompts/04 Retreat Prep.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```
```agent
type: button
text: "带我做这次静修"
prompt: "Read Prompts/05 Retreat Facilitation.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```

## 1. 回顾生命主题和核心价值观
它们还引起共鸣吗？不再共鸣就去改源头笔记。
![[Life Theme#Theme]]
![[Core Values#Values]]

笔记：
- 

## 2. 回顾日记
读最近 90 天的日记。看努力分的趋势，也看你反复写下的事。
```dataviewjs
const q = moment(dv.current().quarter, "YYYY-[Q]Q");
await dv.view("Meta/views/dailyquestions", { from: q.clone().startOf("quarter").format("YYYY-MM-DD"), to: q.clone().endOf("quarter").format("YYYY-MM-DD") });
```
```dataviewjs
await dv.view("Meta/views/habits", { days: 28 });
```
本季的胜利：
```dataviewjs
const q = moment(dv.current().quarter, "YYYY-[Q]Q");
const from = q.clone().startOf("quarter"), to = q.clone().endOf("quarter");
const cfg = dv.page("Meta/Compass Config") || {};
const pages = dv.pages(`"${cfg.daily_folder || "01 Journal/Daily"}"`).where(p => /^\d{4}-\d{2}-\d{2}$/.test(p.file.name) && moment(p.file.name).isBetween(from, to, "day", "[]")).sort(p => p.file.name);
const wins = [];
for (const p of pages) for (const L of p.file.lists) if (L.section && (L.section.subpath === "胜利" || L.section.subpath === "Wins")) wins.push(`${p.file.link}: ${L.text}`);
if (wins.length) dv.list(wins); else dv.paragraph("*本季还没有记下胜利。*");
```
特别显眼的：
- 

## 3. 生命之轮
在顶部属性里，给每个领域的当下满意程度打 1 到 10 分。然后只选一个领域，作为接下来 90 天的焦点。
```dataviewjs
await dv.view("Meta/views/wheel", { page: dv.current().file.path });
```
接下来 90 天的焦点领域：
- 

为什么是这一个：
- 

## 4. 回顾
### 上半场：回头看上个季度
把上季度的静修和这一篇并排打开。那些意图发生了吗？你在改变，还是用新词重写同一批目标？

顺利的事：
- 

不顺的事：
- 

我学到的：
- 

### 下半场：开始 / 停止 / 保持
| 开始 | 停止 | 保持 |
| --- | --- | --- |
|  |  |  |

## 5. 下个季度的意图
最多三条。每一条都要能在某一周里做成。
1. 
2. 
3. 

## 6. 回顾理想一周
[[Ideal Week|理想一周]] 里有没有给上面的意图留出时间？现在就改。
![[Ideal Week#Grid]]

要改的：
- 

## 7. 要承诺的项目
在 `04 Projects/` 里创建或更新项目笔记，把 `quarter:` 设成这一季，季记才会列出它们。属性名 `quarter` 不要改。
- 

## 收尾
用一句话写下这一季的方向：
- 
