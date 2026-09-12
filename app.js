const titles = {
  home: ["Labor Guide", "Roseanne & Spencer"],
  plan: ["Birth plan", "Show staff if needed"],
  space: ["Create space", "Early labor / between waves"],
  comfort: ["Comfort measures", "Stay with one through the surge"],
  positions: ["Labor positions", "Match the station they name"]
};
function show(id, stage) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("active", s.id === id));
  document.querySelectorAll(".nav button").forEach((b) => b.classList.toggle("on", b.dataset.go === id));
  const [title, eye] = titles[id] || titles.home;
  document.getElementById("heading").textContent = title;
  document.getElementById("eyebrow").textContent = eye;
  if (id === "positions" && stage) setStage(stage);
  document.querySelector(".screen.active").scrollTop = 0;
}
function setStage(stage) {
  document.querySelectorAll(".stage").forEach((s) => s.classList.toggle("hidden", s.id !== `stage-${stage}`));
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("on", t.dataset.stage === stage));
}
document.querySelectorAll("[data-go]").forEach((el) => {
  el.addEventListener("click", () => show(el.dataset.go, el.dataset.stage));
});
document.querySelectorAll(".tab").forEach((el) => {
  el.addEventListener("click", () => setStage(el.dataset.stage));
});
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  const day = document.body.classList.toggle("day");
  themeBtn.textContent = day ? "Night" : "Day";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", day ? "#f6f1ea" : "#1a1d1b");
});
