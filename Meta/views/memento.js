// Compass Memento Mori widget. Usage: await dv.view("Meta/views/memento")
// Reads birthdate and life_expectancy from Meta/Compass Config.
const cfg = dv.page("Meta/Compass Config") || {};
const root = dv.container.createEl("div", { cls: "lifeos-widget" });
if (!cfg.birthdate) {
  root.createEl("p", { text: "在 Meta/Compass Config 里填写 `birthdate`（YYYY-MM-DD）和 `life_expectancy`，死亡提醒才会显示。" });
} else {
  const birth = moment(String(cfg.birthdate).slice(0, 10));
  const years = Number(cfg.life_expectancy) || 80;
  const today = moment().startOf("day");
  const weeksLived = today.diff(birth, "weeks");
  const totalWeeks = Math.round(years * 52.1775);
  const weeksLeft = Math.max(0, totalWeeks - weeksLived);
  const pct = Math.min(100, Math.round(1000 * weeksLived / totalWeeks) / 10);
  const age = today.diff(birth, "years");
  root.createEl("p", { text: `你 ${age} 岁。大约已经过了 ${weeksLived.toLocaleString()} 周。如果活到 ${years} 岁，大约还剩 ${weeksLeft.toLocaleString()} 周（已用 ${pct}%）。` });
  const bar = root.createEl("div", { cls: "lifeos-bar" });
  bar.createEl("div").style.width = pct + "%";
  const grid = root.createEl("div", { cls: "lifeos-years" });
  grid.style.marginTop = "0.5em";
  for (let y = 0; y < years; y++) {
    const s = grid.createEl("span");
    if (y < age) s.addClass("lived");
    if (y === age) s.addClass("now");
    s.title = `Age ${y}`;
  }
  root.createEl("p", { text: "一格是一年。有意识地过下一格。" }).style.opacity = "0.6";
}
