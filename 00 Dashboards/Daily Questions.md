问的是「我今天有没有尽全力……」，1 到 10 分，来自 Marshall Goldsmith 的 *Triggers*。打的是努力，不是结果：生病时慢慢跑了 3 英里，可以是 10 分；计划跑 12 英里，因为不想跑只跑了 6 英里，可以是 5 分。

问题是日记里的 `dq_*` 数字属性。在 [[Compass Config|配置]] 里改 `questions` 的 `text`。不要改已经用过的 `key`。新日记和晚间问答会跟着这份列表。

## 趋势
```dataviewjs
await dv.view("Meta/views/dailyquestions", { days: 90 });
```

## 作答的日子
```dataviewjs
const cfg = dv.page("Meta/Compass Config") || {};
const folder = cfg.daily_folder || "01 Journal/Daily", pre = cfg.dq_prefix || "dq_";
const pages = dv.pages(`"${folder}"`).where(p => /^\d{4}-\d{2}-\d{2}$/.test(p.file.name)).sort(p => p.file.name, "desc").array();
const keys = [...new Set(pages.flatMap(p => Object.keys(p.file.frontmatter || {}).filter(k => k.startsWith(pre))))].sort();
const labels = cfg.labels || {};
const label = k => labels[k] || k.slice(pre.length).replace(/[_-]+/g, " ").replace(/\b\w/g, c => c.toUpperCase());
const val = (p, k) => { const v = (p.file.frontmatter || {})[k]; return v === null || v === undefined || v === "" ? "" : String(v); };
const rows = pages.filter(p => keys.some(k => val(p, k) !== "")).slice(0, 30).map(p => [p.file.link, ...keys.map(k => val(p, k))]);
if (keys.length) dv.table(["日期", ...keys.map(label)], rows); else dv.paragraph(`还没有 ${pre}* 属性。`);
```

## 问
```agent
type: button
text: "看看问题和习惯的趋势"
prompt: "Read Prompts/13 Trend Analysis.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: right-pane
```
