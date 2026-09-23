插件：Agent Client 0.12.1（`agent-client`，https://github.com/RAIT-09/obsidian-agent-client，Apache 2.0，仅桌面）。它通过 Agent Client Protocol 在本机跑一个助手（Claude Code、Codex、Gemini CLI，以及下面的 Grok），并把聊天放在侧栏、标签页、浮动窗口或笔记里面。

## 它给 Compass 加上什么
- 和已配置的助手说话，并明确提到你打算分享的笔记。助手页里嵌的聊天用它所在的那篇笔记当上下文。是否带上当前笔记和链接笔记，取决于客户端设置。
- 自动批准保持关闭。改之前要问，是使用规则，并不能保证每一个外部客户端或助手都会执行。
- 准备好的提示词是 [[Assistant]] 和 [[Compass Dashboard]] 上的按钮：周回顾、静修准备、今天最重要的事、写作帮助。
- 每次会话开始会读库根的 `AGENTS.md`（`CLAUDE.md` 和 `GEMINI.md` 指向它）。它说明文件夹、属性约定，以及什么不能动。改系统时也改它。重复的工作在 `Prompts/`（[[20 Prompt Library]]）。
- 随库的 `.claude/settings.json` 有一份只读 MCP 允许名单。实际权限还取决于客户端和它的其他设置。可选的 claude-obsidian 提供知识库流程，见 [[15 claude-obsidian]]。
- 有了 Obsidian MCP 桥（见 [[19 Obsidian MCP Bridge]]），助手可以在对话里打开笔记和看板、运行任何 Obsidian 命令、搜索，以及补丁式修改笔记。

## Grok

这个库的 Agent Client 是 0.12.1，预设名单里还没有 Grok。已经加了一条自定义助手：命令 `grok`，参数 `agent` 和 `stdio`。新对话和助手页的嵌入聊天默认用它。Claude Code 仍在名单里，聊天右上角可以换回去。

本机需要能在终端里运行 `grok`（安装脚本：`curl -fsSL https://x.ai/cli/install.sh | bash`）。登录用 `grok` 自己的账号。不要把 `XAI_API_KEY` 写进库里的设置文件。自动批准保持关闭，不要给这条命令加 `--always-approve`。

以后如果把插件升到带官方 **Grok Build** 预设的版本，改用那个预设，并删掉这条自定义项，避免两个 Grok 叠在一起。

## 在一台机器上设置一次（Claude Code）
可选。没有它，库也完全能用。需要终端、Node.js（https://nodejs.org，LTS），以及 Claude 账号或 API 密钥。不用终端就跳过这一节。
1. 安装 Claude Code 并登录：`curl -fsSL https://claude.ai/install.sh | bash`，然后运行一次 `claude`。（也可以把 Anthropic API 密钥放进 Obsidian 的钥匙串。见插件文档。）
2. 安装适配器：`npm install -g @agentclientprotocol/claude-agent-acp`。
3. Obsidian：设置 → Agent Client → 预设助手 → Claude Code。点 **Auto-detect**，或粘贴 `which claude-agent-acp` 的路径。
4. 点丝带上的机器人图标，发送「hello」。应当得到回复。

### Linux Flatpak 版 Obsidian
Flatpak 沙箱看不见 `/usr/local/bin`，它的 `PATH` 只有 `/usr/bin:/app/bin`，所以适配器那行 `#!/usr/bin/env node` 会失败。家目录挂进了沙箱，修法是在 `~/.local/bin` 放一个包装脚本：
```sh
#!/bin/sh
exec "$HOME/.local/bin/node" "/path/to/lib/node_modules/@agentclientprotocol/claude-agent-acp/dist/index.js" "$@"
```
把 `/path/to/lib/node_modules/...` 换成 `npm root -g` 的输出再加上 `/@agentclientprotocol/claude-agent-acp/dist/index.js`。给文件执行权限（`chmod +x`），把完整路径（例如写成绝对路径的 `~/.local/bin/claude-agent-acp`）贴进插件设置里的 Claude Code 路径。不需要 `flatpak override`。维护者记录的另一种做法是 `flatpak override --user --filesystem=host-os:ro md.obsidian.Obsidian`，再把插件指向 `/var/run/host/usr/...`。那会放宽沙箱，不是必需的。

验证：打开 Agent Client 聊天，发送「hello」。有回复就说明包装脚本能用。

## 把聊天和按钮嵌进笔记
围栏语言用 `agent-client` 或 `agent`，正文是 YAML（文档：https://rait-09.github.io/obsidian-agent-client/usage/embeddable-blocks.html）。
- 聊天：`type: chat`，`agent`，`model`，`height`，`id` 加上 `persist: true` 才能在重启后还在，`noteContext: hosting` 把提及钉在所在的笔记上。
- 按钮：`type: button`，`text`，`prompt`，`viewType: right-pane | floating | editor-tab | embedded`。用 `autoSend: false`，先把提示词放进输入框，另一次动作再发送。

## 值得设的
- 导出：文件夹 `Meta/Agent Chats`（已预置），标签 `agent-client`，自动导出关闭。导出的对话包含当时提到的笔记，所以会像普通笔记一样出现在库搜索里。
- 提示词注入：保持打开（维基链接、`$math$`、Obsidian 风味的表格）。
- 权限：自动批准保持关闭。

## 给社区模板的安全说明
- 仅桌面。助手的权限和你的终端用户一样。插件只是把批准摆到面前。
- 这台机器的路径和 API 密钥住在 Obsidian 的设置和钥匙串里，不进库。模板带的 `agent-client/data.json` 是最小的（自动批准关闭、默认助手、导出文件夹），没有会话、路径或密钥。`build_template.py` 会把其余的清掉。
- 离开你机器的，是你发送的东西：消息、提到的笔记、附件。在对话里提到的日记会送到模型提供方。
