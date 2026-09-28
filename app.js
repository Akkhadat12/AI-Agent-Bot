(function () {
  const order = ["cover", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "closing"];
  let index = -1;
  let locked = false;
  let timer = 0;

  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function settleMs() {
    return reduced() ? 360 : 740;
  }

  function show(name, force) {
    const next = order.indexOf(name);
    if (next < 0) return;
    if (locked && !force) return;
    if (next === index) return;
    index = next;
    document.querySelectorAll(".scene").forEach((scene) => {
      const on = scene.dataset.scene === name;
      scene.hidden = !on;
      scene.classList.remove("is-in");
    });
    const active = document.querySelector('.scene[data-scene="' + name + '"]');
    void active.offsetWidth;
    active.classList.add("is-in");
    const hit = active.querySelector(".hit");
    if (hit) hit.focus({ preventScroll: true });
    locked = true;
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      locked = false;
    }, settleMs());
  }

  document.addEventListener("click", (event) => {
    const hit = event.target.closest(".hit");
    if (!hit) return;
    const dest = hit.getAttribute("data-next");
    if (!dest) return;
    show(dest, false);
  });

  window.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (event.key === " " || event.code === "Space") {
      event.preventDefault();
      if (event.repeat || locked) return;
      if (index >= order.length - 1) return;
      show(order[index + 1], false);
    } else if (event.key === "r" || event.key === "R") {
      event.preventDefault();
      if (index <= 0) return;
      show("cover", true);
    }
  });

  show("cover", true);
})();
