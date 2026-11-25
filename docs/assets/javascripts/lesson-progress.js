function initLessonProgress() {
  const deck = document.querySelector("[data-study-deck]");
  if (!deck) return;
  const lessons = [...deck.querySelectorAll("[data-lesson-id]")];
  const key = "porasuna:cs295:lecture-07:done";
  const validIds = new Set(lessons.map(lesson => lesson.dataset.lessonId));
  let done = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    if (Array.isArray(saved)) done = new Set(saved.filter(id => validIds.has(id)));
  } catch { /* Progress still works for this page load. */ }

  function render() {
    const count = lessons.filter(lesson => done.has(lesson.dataset.lessonId)).length;
    const percent = Math.round(count / lessons.length * 100);
    deck.querySelector("#study-progress-count").textContent = `${count} of ${lessons.length} complete`;
    deck.querySelector("#study-progress-percent").textContent = percent + "%";
    const meter = deck.querySelector(".study-meter");
    meter.setAttribute("aria-valuenow", String(count));
    meter.querySelector(".study-meter-fill").style.width = percent + "%";
    deck.querySelector(".study-complete-message").hidden = count !== lessons.length;
    for (const lesson of lessons) {
      const complete = done.has(lesson.dataset.lessonId);
      lesson.dataset.complete = String(complete);
      const button = lesson.querySelector(".lesson-done");
      button.setAttribute("aria-pressed", String(complete));
      button.textContent = complete ? "Done ✓ — undo" : "Mark lesson done ✓";
      lesson.querySelector(".lesson-state").textContent = complete ? "DONE ✓" : "TO DO";
    }
  }

  deck.addEventListener("click", event => {
    const button = event.target.closest(".lesson-done");
    if (!button) return;
    const id = button.closest("[data-lesson-id]").dataset.lessonId;
    if (done.has(id)) done.delete(id);
    else done.add(id);
    try { localStorage.setItem(key, JSON.stringify([...done])); } catch { /* Keep in memory. */ }
    render();
  });
  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLessonProgress, { once: true });
} else {
  initLessonProgress();
}
