// Compass Setup status widget. Usage: await dv.view("Meta/views/setup")
// Detects what is still at its template default. Renders booleans only; never shows key values; never writes.
const cfg = dv.page("Meta/Compass Config") || {};
const cur = dv.current() || {};
const rows = [];
const add = (tier, item, ok, where, note) => rows.push({ tier, item, ok, where, note: note || "" });
const readJson = async p => { try { return JSON.parse(await app.vault.adapter.read(p)); } catch (e) { return null; } };
const readText = async p => { try { const f = app.vault.getAbstractFileByPath(p); return f ? await app.vault.cachedRead(f) : ""; } catch (e) { return ""; } };
const enabled = id => { try { return app.plugins.enabledPlugins.has(id); } catch (e) { return false; } };
const pset = id => { try { return app.plugins.plugins[id]?.settings || null; } catch (e) { return null; } };
const today = moment();

// Tier 0: the app
for (const [id, name] of [["life-os-app", "Life OS"], ["dataview", "Dataview"], ["templater-obsidian", "Templater"], ["periodic-notes", "Periodic Notes"], ["quickadd", "QuickAdd"], ["obsidian-tasks-plugin", "Tasks"], ["obsidian-kanban", "Kanban"]])
  add(0, `${name} 插件已启用`, enabled(id), "设置 → 第三方插件");
add(0, "Life OS 命令已登记", !!app.commands.findCommand("life-os-app:open-home"), "命令面板 → 打开 Life OS 首页");
add(0, "Dataview 的 JavaScript 查询已打开", !!(pset("dataview")?.enableDataviewJs), "设置 → Dataview");
add(0, "CSS 片段 lifeos 已启用", (() => { try { return app.customCss.enabledSnippets.has("lifeos"); } catch (e) { return false; } })(), "设置 → 外观 → CSS 片段");
add(0, "Periodic Notes 的日记文件夹与配置一致", (() => { const pn = pset("periodic-notes"); return !!pn && pn.daily?.folder === (cfg.daily_folder || "01 Journal/Daily") && /Daily Note\.md$/.test(pn.daily?.template || ""); })(), "设置 → Periodic Notes");
add(0, "Templater 会在新建文件时运行", (() => { const t = pset("templater-obsidian"); return !!t && (t.trigger_on_file_creation === true || t.trigger_on_file_creation_mode === "folder"); })(), "设置 → Templater");
add(0, "QuickAdd 捕捉已登记成命令", (() => { const ch = pset("quickadd")?.choices || []; return ["记一笔", "记一个胜利", "感恩", "添加任务"].every(n => ch.find(c => (c.name || "").includes(n))?.command === true); })(), "设置 → QuickAdd（每个选项打开闪电命令）");
add(0, "今天的笔记和晚间问答已有快捷键", (() => { try { const hk = app.hotkeyManager.customKeys || {}; return ["quickadd:choice:lifeos-daily", "templater-obsidian:Templates/Daily Questions Prompt.md"].every(id => (hk[id] || []).length > 0); } catch (e) { return false; } })(), "设置 → 快捷键");

// Tier 1: make it yours
add(1, "已填写出生日期", !!cfg.birthdate && String(cfg.birthdate).slice(0, 10) !== "1990-01-01", "[[Compass Config]]");
const theme = await readText("03 Planning/Life Theme.md");
add(1, "已写下生命主题", theme.length > 0 && !theme.includes("把这一行换成你的生命主题"), "[[Life Theme]]");
const values = await readText("03 Planning/Core Values.md");
add(1, "已写下核心价值观", values.length > 0 && !/\*\*价值一\*\*/.test(values), "[[Core Values]]");
add(1, "理想一周已换成你的（已去掉 example）", !((dv.page("03 Planning/Ideal Week") || {}).example === true), "[[Ideal Week]]", "填好表格后，删掉 example 属性");
add(1, "已看过问题、习惯和生命之轮", Array.isArray(cfg.questions) && cfg.questions.length > 0 && Array.isArray(cfg.habits) && cfg.habits.length <= 5, "[[Compass Config]]", Array.isArray(cfg.habits) && cfg.habits.length > 5 ? "习惯超过 5 个；一个季节保持 3 到 5 个" : "");
const examples = dv.pages("#example").length;
add(1, "已删除示范笔记", examples === 0, "[[16 Onboarding Assistant]] 第 6 步，或删除带 example 标签的笔记", examples ? `还剩 ${examples} 篇示范笔记` : "");

// Tier 2: the practice
const daily = cfg.daily_folder || "01 Journal/Daily";
const dqp = cfg.dq_prefix || "dq_";
add(2, "今天的日记已存在", !!dv.page(`${daily}/${today.format("YYYY-MM-DD")}`), "Ctrl/Cmd+Shift+D");
const real = dv.pages(`"${daily}"`).where(p => /^\d{4}-\d{2}-\d{2}$/.test(p.file.name) && !(p.tags || []).includes("example")).array();
const answered = real.filter(p => Object.entries(p.file.frontmatter || {}).some(([k, v]) => k.startsWith(dqp) && v !== null && v !== "" && v !== undefined));
const last30 = answered.filter(p => today.diff(moment(p.file.name), "days") < 30).length;
add(2, "已有第一次真实的每日问答", answered.length > 0, "今晚 Ctrl/Cmd+Shift+Q，或 [[02 End of Day Coaching]]");
add(2, `近 30 天作答天数（目标 25）`, last30 >= 25, "继续", `${last30}/30`);
add(2, "本周笔记已存在", !!dv.page(`${cfg.weekly_folder || "01 Journal/Weekly"}/${today.format("gggg-[W]ww")}`), "命令面板：Periodic Notes: Open weekly note", "从第 2 周起");
add(2, "本季已有个人静修笔记", !!dv.page(`${cfg.retreat_folder || "02 Retreats"}/${today.format("YYYY-[Q]Q")} Personal Retreat`), "[[04 Workflow - Personal Retreat]]", "从第 60 天起");
const plan = (await readText("09 Reading/Reading Plan.md")).replace(/```[\s\S]*?```/g, "");
if (app.vault.getAbstractFileByPath("09 Reading")) add(2, "已决定阅读模块（填了计划，或删掉该文件夹）", /^- \[ \]/m.test(plan), "[[07 Workflow - Daily Reading]]", "可选");

// Tier 3: AI in the vault (optional)
add(3, "Agent Client 插件已启用", enabled("agent-client"), "设置 → 第三方插件", "可选");
const ac = await readJson(".obsidian/plugins/agent-client/data.json");
const configuredCommands = Object.values(ac?.presetAgents || {}).map(p => p?.command || "").filter(Boolean);
const isLinux = navigator.userAgent.includes("Linux") && !navigator.userAgent.includes("Android");
add(3, "Agent Client 里至少设置了一个本地助手路径", configuredCommands.some(cmd => !isLinux || cmd.startsWith("/")), "设置 → Agent Client → 选择助手 → Auto-detect", "可选；Linux Flatpak 要用包装脚本的完整路径，见 Guide 14");
add(3, "助手已登录（自己打勾）", cur.setup_claude_login === true, "把本笔记属性 setup_claude_login 改成 true", "可选；属性名要留着，升级时才对得上");
add(3, "已为助手登记 Obsidian MCP（自己打勾）", cur.setup_mcp_registered === true, "[[19 Obsidian MCP Bridge]]，然后把 setup_mcp_registered 改成 true", "可选");
add(3, "Agent Client 里已经有过一次对话", (ac?.savedSessions || []).length > 0, "[[Assistant]]", "可选");

// Tier 4: browser and web (optional)
add(4, "Local REST API 已启用", enabled("obsidian-local-rest-api"), "设置 → 第三方插件", "可选");
const ra = await readJson(".obsidian/plugins/obsidian-local-rest-api/data.json");
add(4, "REST API 密钥已生成（这里不显示密钥）", typeof ra?.apiKey === "string" && ra.apiKey.length > 0 && ra?.enableInsecureServer === true, "设置 → Local REST API", "可选");
add(4, "Vault Lens 扩展已连接（自己打勾）", cur.setup_vault_lens === true, "[[17 Search Providers]]，然后把 setup_vault_lens 改成 true", "可选");
add(4, "网页查看器核心插件已打开", (() => { try { return app.internalPlugins.plugins.webviewer?.enabled === true; } catch (e) { return false; } })(), "设置 → 核心插件", "可选");
add(4, "SEO 扫描目录已设置", ((await readJson(".obsidian/plugins/seo/data.json"))?.scanDirectories || "").includes("06 Writing"), "设置 → SEO", "可选");
add(4, "库文件夹已有备份（自己打勾）", cur.setup_backup === true, "把整个文件夹复制到别处，然后把 setup_backup 改成 true");

// Render
const root = dv.container.createEl("div", { cls: "lifeos-widget" });
if (cur.status === "done") { root.createEl("p", { text: "设置已标记完成。把这篇笔记的 status 改回 open，清单会重新出现。" }); }
else {
  const tiers = { 0: "第 0 层：程序", 1: "第 1 层：换成你的", 2: "第 2 层：开始用", 3: "第 3 层：库里的助手（可选）", 4: "第 4 层：浏览器和网页（可选）" };
  const total = rows.filter(r => r.tier <= 2).length, done = rows.filter(r => r.tier <= 2 && r.ok).length;
  root.createEl("p", { text: `必要项完成 ${done} / ${total}。下面的可选项不做，库也照常能用。` });
  for (const t of [0, 1, 2, 3, 4]) {
    root.createEl("h4", { text: tiers[t] });
    const table = root.createEl("table", { cls: "lifeos-table" });
    const th = table.createEl("thead").createEl("tr"); for (const h of ["", "项目", "去哪里改", "备注"]) th.createEl("th", { text: h });
    const tb = table.createEl("tbody");
    for (const r of rows.filter(x => x.tier === t)) {
      const tr = tb.createEl("tr");
      tr.createEl("td", { text: r.ok ? "✅" : "⬜" });
      tr.createEl("td", { text: r.item });
      const td = tr.createEl("td");
      const m = r.where.match(/^\[\[([^\]]+)\]\]/);
      if (m) { const a = td.createEl("a", { text: m[1], cls: "internal-link", attr: { href: m[1], "data-href": m[1] } }); a.addEventListener("click", e => { e.preventDefault(); app.workspace.openLinkText(m[1], "", false); }); td.appendText(r.where.slice(m[0].length)); }
      else td.setText(r.where);
      tr.createEl("td", { text: r.note });
    }
  }
}
