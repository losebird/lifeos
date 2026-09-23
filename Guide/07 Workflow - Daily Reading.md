# 工作流 5：每日阅读

视频 11:51 到 14:11 是 Mike 的每日圣经阅读。这是他追踪最久的习惯，也是教会他「为什么所有东西要放在一个库里」的流程。在这个模板里，模块是通用的：任何有计划、章节笔记、研读笔记和主题页的每日阅读都可以。圣经是现成例子，因为视频如此，脚本也是按这个生成的。

可选。不想要就删掉 `09 Reading/`，以及 `Templates/Daily Note.md` 里的 `[!reading]` 提示。也可以用来读一个季度的一本书、一门课、一组文章：`Reading Plan.md` 里一章一条任务，`Chapters/` 里一章一篇笔记，研读笔记再链到这些章。

## 两种笔记（12:09）
| | 一章一篇 | 一节一篇 |
| --- | --- | --- |
| 文件夹 | `09 Reading/Chapters/Genesis 1.md` | `09 Reading/Verses/Genesis 1.1.md` |
| 用途 | 每日阅读计划 | 讲道笔记、主题页、研读笔记、读书笔记的链接目标 |
| 数量 | 1,189 | 31,102 |

## 阅读计划（12:22）
`09 Reading/Reading Plan.md` 里每一章一条任务，带计划日期（⏳）。日记里的**今日阅读**提示会查询今天及之前安排的章节，没读完的会滚到后面。在提示里勾掉。

生成一整份计划：
```bash
python3 scripts/generate_reading_plan.py --start 2026-09-01 --days 365 > "09 Reading/Reading Plan.md"
```
选项：`--order canonical`（默认）或 `--order chronological`（内置一种常见的编年顺序），`--days 365`。

## 生成章笔记和节笔记
```bash
python3 scripts/split_bible.py path/to/kjv.txt --out "09 Reading"
```
输入是纯文本，一行一节，格式为 `书名 章:节<TAB>正文`（公有领域 KJV/WEB 的常见格式）。产出 `Chapters/<书名> <章>.md`（全文和到各节的链接）和 `Verses/<书名> <章>.<节>.md`（带上一节、下一节）。三万多个小文件对 Obsidian 没问题，第一次建索引要给它一分钟。

## 交叉引用库（12:53）
- 研读笔记（`Templates/Study Note.md`）链到提到的每一节。在一节笔记上打开本地关系图，能看见碰过它的每篇讲道、研读和主题页。
- `09 Reading/Topics/` 里的主题页是内容地图。
- 纸质圣经上的划线，变成节笔记上的标签（`#highlight`，`#topic/...`）。

Mike 自己的圣经资源：https://download.mikeschmitz.com/bible
