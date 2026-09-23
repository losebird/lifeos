claude-obsidian（https://github.com/AgriciDaniel/claude-obsidian，模板作者写的 Claude Code 插件）是**知识和出处层**。它给 Claude Code 这些库技能：`/save`、`/wiki-query`、`/wiki-ingest`、`/wiki-lint`、`/autoresearch`、`/think`、`/canvas`，以及 Bases 和 Markdown 引用。它还有一个事务核心：先计划，给出哈希，只有在你批准之后才写入。

## 它不是什么
它不是跑 Compass 的那个东西。事务核心只写 `wiki/` 和 `.raw/`。日记、静修、任务、人物和写作，在 Obsidian 里改（QuickAdd、Templater、Tasks、看板），或通过 Agent Client 的对话逐次批准（[[14 Agent Client and Claude Code]]）。两层都会读库根的 `CLAUDE.md`。

## 知识层加上了什么
| 路径 | 用途 |
| --- | --- |
| `.claude-obsidian.json` | 工作区标记（`role: vault`，`source_inbox: inbox`） |
| `.gitignore` | 忽略 `.vault-meta/`、`.mcp.json`、`.obsidian/workspace*.json`、`.trash/` |
| `inbox/` | 把资料放这里，再摄入 |
| `.raw/.manifest.json` | 摄入的增量记录 |
| `wiki/overview.md`、`wiki/hot.md`、`wiki/index.md`、`wiki/log.md` | 定向、近期上下文、目录、操作日志 |
| `wiki/routing-map.md` | 主人写的：在这个库里，操作该把东西归到哪里 |
| `wiki/meta/ledgers/*.json` | 来源账本和主张账本（空的） |
| `.obsidian/snippets/vault-colors.css` | 给文件树里的 `wiki/*` 上色（已启用） |
| `.vault-meta/` | 运行日志，已被 git 忽略。分发之前删掉 |

仪表盘上的全库任务查询排除了 `wiki/`，所以知识页里的清单不会漏进任务或项目仪表盘。

## 命令
```bash
CORE=<claude plugin cache>/claude-obsidian/<version>/scripts/claude-obsidian.py   # 或用 /claude-obsidian:* 斜杠命令
python3 "$CORE" doctor --vault .            # 健康检查
python3 "$CORE" lint --vault . --format markdown   # 只读的知识库检查
```
在 Claude Code 里（终端或 Agent Client 对话）：`/claude-obsidian:wiki-query`、`/claude-obsidian:save`、`/claude-obsidian:wiki-lint`。每次写入都走检查、批准、应用。不要用 `--force`。

可选：`export CLAUDE_OBSIDIAN_SESSION_CONTEXT=1` 会让每次 Claude Code 会话开始时先读 `wiki/hot.md`（把库里的文字放进模型上下文。要故意打开）。

## 没有这个插件的人
什么都不会坏。`wiki/` 和 `inbox/` 是普通的 Markdown 文件夹，前置属性也合法。点文件是看不见的。只是没有 `/claude-obsidian:*` 这些流程。
