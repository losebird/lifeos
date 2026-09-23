---
status: open
setup_claude_login: true
setup_mcp_registered: true
setup_vault_lens: false
setup_backup: false
tags:
  - setup
---
这个库每晚问你一组诚实的问题。计划、习惯、任务、写作和助手都叠在这上面，一次加一层。它依照 Mike Schmitz 的 *How I Run My Whole Life Out of Obsidian* 做成，与 Practical PKM 没有从属关系。

## 第一步：打开插件
打开这个文件夹时，Obsidian 会问 **Restricted mode**（受限模式）。点 **Turn off**。如果当时关过了：设置 → 第三方插件 → 关闭受限模式。十个社区插件和 Life OS 已经装在库里。然后按 `Cmd+P`，运行 **Reload app without saving**。重新加载后 Life OS 会自己打开。

**如果下面还是一大段代码，而不是清单，说明这一步还没做完。**

## 设置状态
```dataviewjs
await dv.view("Meta/views/setup");
```
有四项程序看不见，只能你自己打勾：Claude 是否登录、MCP 是否登记、浏览器扩展、是否做过备份。做完后，把这篇笔记属性里对应的值改成 `true`。属性名不要改。

## 今天（20 分钟）
1. 完成上面的第一步。
2. 打开 [[Compass Config|配置]]，填写 `birthdate`。
3. 打开 [[Life Theme|生命主题]]，在 `## Theme` 下面写一句草稿。这个标题要留着，每天的日记靠它嵌入。第一次静修时再改。
4. 打开 [[Compass Dashboard|罗盘]]。图来自带 `example` 的示范笔记。
5. 今晚：`Cmd+Shift+D` 创建或打开今天的笔记；`Cmd+Shift+Q` 开始提问。按 1 到 10 回答，在 `## 日记` 下写一行。就停在这里。

## 这一周
- 每天早上 `Cmd+Shift+D`，每天晚上 `Cmd+Shift+Q`。
- 第 3 天：打开 [[Compass Config|配置]]，改掉一句你并不想问的话。习惯保持 3 到 5 个。
- 第 7 天：看一眼 [[Daily Questions|每日问答]]，先什么都别改。大致填好 [[Ideal Week|理想一周]]，然后删掉它属性里的 `example`。阅读模块：要么填 [[Reading Plan|阅读计划]]，要么删掉文件夹 `09 Reading`。

## 这一个月
- 第 8 天：删掉带 `example` 标签的笔记。可以搜索 `tag:#example`，也可以用下面的助手按钮，一次删一篇。
- 第 14 天：用 `Cmd+Alt+W` 打开本周笔记，只填「顺利的事」。
- 第 21 天：可选。要在库里用助手，读 [[14 Agent Client and Claude Code]]，再按下面的按钮。
- 第 30 天：如果近 30 天有 25 天打了分（清单会数），读 [[04 Workflow - Personal Retreat]]，把静修订在第 60 到 90 天。任务、写作看板和浏览器扩展放在那之后（[[11 Build Order]]）。

## 用助手
```agent
type: button
text: "帮我设置这个库"
prompt: "Read Prompts/16 Onboarding Assistant.md with vault_read and follow its Prompt section from step 0."
viewType: right-pane
```

## 做完之后
把这篇笔记的属性 `status` 改成 `done`。只能写这四个字母，写成「完成」的话，首页的设置提示不会收起来。想再看清单，改回 `open`。
