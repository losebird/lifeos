---
birthdate:
life_expectancy: 80
daily_folder: 01 Journal/Daily
weekly_folder: 01 Journal/Weekly
quarterly_folder: 01 Journal/Quarterly
retreat_folder: 02 Retreats
projects_folder: 04 Projects
dq_prefix: dq_
habit_prefix: habit_
wheel_prefix: wheel_
board_done_lanes: Done,Published,Archive
questions:
  - key: dq_goals
    text: 我今天有没有尽全力把目标说清楚？
  - key: dq_progress
    text: 我今天有没有尽全力朝目标推进？
  - key: dq_meaning
    text: 我今天有没有尽全力找到意义？
  - key: dq_happy
    text: 我今天有没有尽全力让自己开心？
  - key: dq_relationships
    text: 我今天有没有尽全力建立正向的关系？
  - key: dq_engaged
    text: 我今天有没有尽全力全情投入？
labels:
  dq_goals: 目标
  dq_progress: 进展
  dq_meaning: 意义
  dq_happy: 快乐
  dq_relationships: 关系
  dq_engaged: 投入
  habit_journal: 写日记
  habit_exercise: 锻炼
  habit_reading: 阅读
  wheel_health: 健康
  wheel_relationships: 关系
  wheel_family: 家庭
  wheel_career: 事业
  wheel_finances: 财务
  wheel_growth: 成长
  wheel_fun: 乐趣
  wheel_meaning: 意义
habits:
  - habit_journal
  - habit_exercise
  - habit_reading
wheel_areas:
  - wheel_health
  - wheel_relationships
  - wheel_family
  - wheel_career
  - wheel_finances
  - wheel_growth
  - wheel_fun
  - wheel_meaning
---
# 配置

整套系统只从这一页读设置。仪表盘、新日记、静修笔记和晚间问答都读上面属性区里的列表。改这里就够了。

属性的英文名字要留着，例如 `birthdate`、`questions`、`habits`。程序认的是这些名字。可以改的是冒号后面的说明文字，以及 `labels` 里的中文显示名。

## 个人
| 属性 | 谁在用 | 说明 |
| --- | --- | --- |
| `birthdate` | 死亡提醒 | 日期格式 `YYYY-MM-DD`。空着就不计算。 |
| `life_expectancy` | 死亡提醒 | 预期寿命，单位是年 |

## 每日问答（`questions`）
问的是「我今天有没有尽全力……」，1 到 10 分。打的是努力，不是结果。来自 Marshall Goldsmith 的 *Triggers*。改 `text` 就是改问句。`key` 保持 `dq_` 开头，并且不要改已经用过的键，否则旧日记的分数对不上。新日记会自动带上这份列表。晚间问答按这个顺序问。图表用 `labels` 里的短名称；没有短名称时，才从键名生成标签。

视频里的另一套问题。想换成它，就把下面整段贴到上面的 `questions` 上，并把 `text` 写成你自己的中文：
```yaml
questions:
  - {key: dq_spiritual, text: 我今天有没有尽全力在灵性上成长？}
  - {key: dq_spouse, text: 我今天有没有尽全力爱我的伴侣？}
  - {key: dq_kids, text: 我今天有没有尽全力爱我的孩子？}
  - {key: dq_friend, text: 我今天有没有尽全力做一个好朋友？}
  - {key: dq_learn, text: 我今天有没有尽全力学到一点东西？}
  - {key: dq_create, text: 我今天有没有尽全力做出一点东西？}
  - {key: dq_exercise, text: 我今天有没有尽全力锻炼？}
```
换这套之后，给每个新键在 `labels` 里加一个短名称。已经写过的旧键不要删。

## 习惯（`habits`）
每篇新日记上的勾选属性。一个季节保持 3 到 5 个。值必须是 `habit_` 开头的键，例如 `habit_journal`。屏幕上的中文在 `labels` 里改。

## 生命之轮（`wheel_areas`）
每篇新静修笔记上的 1 到 10 分。值必须是 `wheel_` 开头的键。显示名写在 `labels` 里。不要改已经打过分的键。

## 文件夹和前缀
| 属性 | 谁在用 |
| --- | --- |
| `daily_folder`、`weekly_folder`、`quarterly_folder`、`retreat_folder`、`projects_folder` | 小部件和快捷跳转。必须和 Periodic Notes 里的文件夹一致 |
| `dq_prefix`、`habit_prefix`、`wheel_prefix` | 图表靠这三个前缀找到数据。保持 `dq_`、`habit_`、`wheel_` |
| `board_done_lanes` | 看板里算作「做完」的泳道名。默认 `Done,Published,Archive`，要和看板上的英文标题一致 |
