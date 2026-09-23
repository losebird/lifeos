通过 Agent Client 在库里使用已配置的助手。这些流程要求助手遵守 `AGENTS.md`。那是使用规则，并不能从技术上保证每一个客户端都会先请求批准。请确认你用的客户端里自动批准是关着的。安装见 [[14 Agent Client and Claude Code]]。没有这个插件时，打开 `Prompts/` 里的笔记，把其中的 Prompt 一节复制到你的助手里（[[20 Prompt Library]]）。

## 发送之前

下面的按钮只是把提示词放进输入框，不会自动发送。先在输入框里看一遍再发送。这个嵌入对话使用的是本页助手笔记作为上下文，并不保证带上你最后看过的另一篇笔记。

- 看一眼选中的助手、提到的笔记、附件，以及是否展开链接笔记。
- 发给模型服务的对话，会把你的提示词以及被读到的笔记送出去。日记和人物笔记里可能有敏感的个人内容。
- 范围很大的回顾，先让它列出准备读的笔记路径和日期。你点头要读哪些，再继续。
- 同意它读哪些笔记，不等于同意它修改、安装、花钱或发布。
- 配了一个助手或本地密钥，不等于已经登录、已经连通，或这条流程已经测试过。

Life OS 自己不向模型发请求。这些按钮交给 Agent Client。实际行为由它的设置、外部客户端和你选的助手决定。

## 每天
```agent
type: button
text: "开始今天"
prompt: "Read Prompts/01 Morning Start.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "带我做今晚的问答"
prompt: "Read Prompts/02 End of Day Coaching.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "今天最重要的事"
prompt: "Read Prompts/14 What Matters Today.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```

## 每周和每季
```agent
type: button
text: "回顾这一周"
prompt: "Read Prompts/03 Weekly Review.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "准备这次静修"
prompt: "Read Prompts/04 Retreat Prep.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "带我做这次静修"
prompt: "Read Prompts/05 Retreat Facilitation.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "看看问题和习惯的趋势"
prompt: "Read Prompts/13 Trend Analysis.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```

## 工作
```agent
type: button
text: "整理收件箱"
prompt: "Read Prompts/06 Task Triage.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "为这次见面做准备"
prompt: "Read Prompts/07 Meeting Prep.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "启动这个项目"
prompt: "Read Prompts/08 Project Kickoff.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "整理看板"
prompt: "Read Prompts/09 Board Grooming.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```

## 写作和研究
```agent
type: button
text: "继续写这篇"
prompt: "Read Prompts/10 Writing Pipeline.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "发布前 SEO 检查"
prompt: "Read Prompts/11 SEO Pre-publish Audit.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "把这一页归档进知识库"
prompt: "Read Prompts/12 Research Capture.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```

## 系统
```agent
type: button
text: "检查库的健康"
prompt: "Read Prompts/15 Vault Health Check.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```
```agent
type: button
text: "帮我设置这个库"
prompt: "Read Prompts/16 Onboarding Assistant.md with vault_read and follow its Prompt section for the note I have open (or the current period if none applies)."
viewType: embed
autoSend: false
```

## 对话
```agent-client
type: chat
agent: grok
height: 600px
id: lifeos-assistant
persist: true
noteContext: hosting
```
