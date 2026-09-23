<%*
/*
  Compass: end-of-day Daily Questions prompt (Marshall Goldsmith, "Triggers").
  Run this template ON the daily note (Templater: Open insert template modal, or the hotkey you assign).
  It asks each question, expects 1..10, then asks yes/no for every habit_* property,
  and writes the answers into the note's properties. Nothing is inserted into the body.
  Questions come from the `questions` list in Meta/Compass Config.md (FALLBACK below is used only if that list is missing). Keep the "Did I do my best to" framing:
  grade effort, not results.
*/
const FALLBACK = [
  ["dq_goals",         "我今天有没有尽全力把目标说清楚？"],
  ["dq_progress",      "我今天有没有尽全力朝目标推进？"],
  ["dq_meaning",       "我今天有没有尽全力找到意义？"],
  ["dq_happy",         "我今天有没有尽全力让自己开心？"],
  ["dq_relationships", "我今天有没有尽全力建立正向的关系？"],
  ["dq_engaged",        "我今天有没有尽全力全情投入？"],
];
const file = tp.config.target_file;
const cache = app.metadataCache.getFileCache(file) || {};
const fm = cache.frontmatter || {};
const cfg = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath("Meta/Compass Config.md"))?.frontmatter || {};
const HB = cfg.habit_prefix || "habit_";
const QUESTIONS = Array.isArray(cfg.questions) && cfg.questions.length ? cfg.questions.map(q => typeof q === "string" ? [q, "我今天有没有尽全力做到「" + q.replace(/^dq_/, "").replace(/[_-]+/g, " ") + "」？"] : [q.key, q.text]).filter(x => x[0] && x[1]) : FALLBACK;
const answers = {};
let cancelled = false;
for (const [key, q] of QUESTIONS) {
  const a = await tp.system.prompt(`${q}  （1 = 很糟，10 = 很好）`, fm[key] ? String(fm[key]) : "");
  if (a === null) { cancelled = true; break; }
  const n = parseInt(a);
  if (!isNaN(n)) answers[key] = Math.min(10, Math.max(1, n));
}
if (!cancelled) {
  const habits = Object.keys(fm).filter(k => k.startsWith(HB));
  for (const h of habits) {
    const nice = (cfg.labels || {})[h] || h.slice(HB.length).replace(/[_-]+/g, " ");
    const pick = await tp.system.suggester(["做了", "没做"], [true, false], false, `习惯：${nice}？`);
    if (pick === null) break;
    answers[h] = pick;
  }
}
if (Object.keys(answers).length) {
  await app.fileManager.processFrontMatter(file, f => { Object.assign(f, answers); });
  new Notice(`已把 ${Object.keys(answers).length} 项答案写入 ${file.basename}`);
}
-%>
