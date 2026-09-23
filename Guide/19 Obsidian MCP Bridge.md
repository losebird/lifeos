Claude（在 Obsidian 的聊天面板里，或在终端里）如何驱动 Obsidian 本身：打开笔记、切到看板、运行任何命令、搜索、编辑。不需要额外插件。Local REST API 5.x 在 `http://127.0.0.1:27123/mcp` 提供 MCP 服务，用同一次安装生成的 API 密钥认证。

## 助手能通过它做什么（16 个工具）
| 工具 | 用途 |
| --- | --- |
| `open_file` | 在界面里打开任何笔记（看板、仪表盘、今天的笔记） |
| `command_list`、`command_execute` | 按 id 运行任何 Obsidian 命令：QuickAdd 捕捉（`quickadd:choice:lifeos-journal`）、看板（`obsidian-kanban:create-new-kanban-board`，归档已完成卡片）、周期笔记（`quickadd:choice:lifeos-daily`，创建或打开今天的笔记）、Templater、SEO 检查、`app:reload`、工作区和视图切换 |
| `active_file_get_path` | 知道你正在看哪一篇 |
| `vault_list`、`vault_read`、`vault_get_document_map` | 浏览文件夹，读笔记或其中一节 |
| `vault_write`、`vault_append`、`vault_patch`、`vault_move`、`vault_copy`、`vault_delete` | 编辑（在标题下追加、补上一节、移动笔记） |
| `search_simple`、`search_query`、`tag_list` | Obsidian 搜索、JsonLogic 元数据查询、标签清单 |

看板是 Markdown，所以「把这张卡片移到 Drafting」是对看板文件做一次 `vault_patch`。Obsidian 会当场重画看板。

## 其他助手
- Codex（`~/.codex/config.toml`）：`[mcp_servers.obsidian]`，`url = "http://127.0.0.1:27123/mcp"`，bearer 令牌来自环境变量。键名以当前 Codex 文档为准。
- Gemini CLI（`~/.gemini/settings.json`）：`"mcpServers": {"obsidian": {"httpUrl": "http://127.0.0.1:27123/mcp", "headers": {"Authorization": "Bearer <key>"}}}`。以当前 Gemini CLI 文档为准。
- 在这个库里，Codex 用它的默认批准模式，Gemini CLI 不要开自动批准。`AGENTS.md` 第 2 条（改之前要问）是行为下限。
- `.claude/settings.json` 为 Claude Code 预先允许了只读工具（`vault_read`、`vault_list`、`vault_get_document_map`、`search_*`、`tag_list`、`active_file_get_path`、`command_list`、`open_file`）。写入和执行仍然会问。

## 在一台机器上设置一次
可选，而且要终端。不用终端就跳过。Agent Client 的聊天没有这一步也能用，只是不能自己打开笔记或运行命令。
1. Local REST API 已启用，HTTP 服务在 27123（随库带上）。
2. 把服务登记给 Claude Code，范围是用户，密钥放在库外面：
   ```bash
   claude mcp add --scope user --transport http obsidian http://127.0.0.1:27123/mcp \
     --header "Authorization: Bearer <key from Settings → Local REST API>"
   claude mcp list   # obsidian: ... ✔ Connected
   ```
   库根的 `.mcp.example.json` 给其他 MCP 客户端看同一份配置。不要在库里建一份带密钥的真正 `.mcp.json`，它会跟着模板发出去（`.gitignore` 已经排除了它）。
3. 在 Obsidian → Agent Client 聊天菜单里点 **Restart agent**（或开一个新对话），让 Claude Code 会话加载这个服务。ACP 适配器读的用户设置、项目设置和本地设置与命令行相同。
4. 在对话里试：「打开项目看板」或「运行晚间问答命令」。第一次会看到一次 `obsidian` 工具调用和权限询问。

## 两个 Claude，一个库
[[Assistant]] 里的聊天面板和终端里的 `claude` 是两个进程。它们不必互相说话：两者都通过这个 MCP 服务和磁盘上的同一批文件到达同一个 Obsidian。想让一边把工作交给另一边，就写进一篇笔记（例如 `wiki/hot.md` 或当天日记），另一边再读。只有需要两边即时传话时，才要用 Claude Code 的 Remote Control 或自定义 MCP 中继。Compass 不需要这个。

## 安全
- 只在本机回环。密钥等于库的访问权。Agent Client 的自动批准保持关闭，其他客户端里也要逐项看权限。这个 API 自己不执行「改之前要问」。外部客户端可以在 Agent Client 的批准界面之外行动。
- `vault_delete` 默认移到废纸篓。`vault_write` 会替换整篇文件。优先用 `vault_patch` 或 `vault_append`。
- 库根的 `AGENTS.md` 告诉助手哪些文件夹只能在你要求时才改。
