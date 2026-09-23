视频 18:36 到 20:46。页面上的东西都是 DataviewJS 在读属性，没有手填的数字。

## 小部件读哪里
| 小部件（视频） | 视图 | 读取 |
| --- | --- | --- |
| 本季静修的生命之轮（19:18） | `Meta/views/wheel.js` | `02 Retreats/YYYY-QN Personal Retreat.md` 里的 `wheel_*`。按今天的日期找这篇笔记 |
| 每日问答合在一起，可开关、可换时间（19:39） | `Meta/views/dailyquestions.js` | 日记里每一个 `dq_*` 数字 |
| 习惯：当前连续、最长连续、最长中断、完成率、合计、最近几天（20:01） | `Meta/views/habits.js` | 日记里每一个 `habit_*` 勾选 |
| 生命主题（20:19） | 嵌入 | `03 Planning/Life Theme.md#Theme`。标题 `Theme` 不要改 |
| 死亡提醒（20:21） | `Meta/views/memento.js` | `Meta/Compass Config.md` 里的 `birthdate`、`life_expectancy` |
| 捕捉和计划笔记的快捷入口（20:23） | `Meta/views/quicklinks.js` | QuickAdd 命令，以及今天的日期 |

另外还有：`Projects Dashboard.md`（他的项目仪表盘，19:03），`Daily Questions.md`（日记仪表盘，18:54），`Habit Canvas.md`，`Task Dashboard.md`。

## 在别处用同一个视图
```dataviewjs
await dv.view("Meta/views/habits", { days: 28 });
await dv.view("Meta/views/dailyquestions", { from: "2026-07-01", to: "2026-09-30" });
await dv.view("Meta/views/wheel", { page: "02 Retreats/2026-Q2 Personal Retreat" });
await dv.view("Meta/views/week", { week: "2026-W35" });
```

## 配置
`Meta/Compass Config.md` 放文件夹、前缀、出生日期、预期寿命，以及问题文字和 `labels` 显示名。配置缺失时，视图用内置的默认值。

## 扩展
Mike 的仪表盘是和 Claude 一起做的。要加一个小部件：复制 `Meta/views/habits.js`，保留开头读配置、文件夹、前缀的几行，改它收集和画出的东西，再用 `dv.view` 调用。视图之间不能互相导入，所以每一份都是自包含的。
