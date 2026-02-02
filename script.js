const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Extra safety: prevent clicking
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
