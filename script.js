const noBtn = document.getElementById("noBtn");

let activated = false;

noBtn.addEventListener("mouseenter", () => {
  // On first hover, detach from layout
  if (!activated) {
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.position = "fixed";
    noBtn.style.left = rect.left + "px";
    noBtn.style.top = rect.top + "px";
    activated = true;
  }

  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Safety: even if clicked somehow
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
