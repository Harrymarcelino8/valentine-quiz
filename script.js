const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Fixed dodge area — NEVER changes
const DODGE_AREA = {
  minX: 160,
  maxX: 240,
  minY: 20,
  maxY: 90
};

noBtn.addEventListener("mouseenter", () => {
  const randomX =
    Math.random() * (DODGE_AREA.maxX - DODGE_AREA.minX) + DODGE_AREA.minX;
  const randomY =
    Math.random() * (DODGE_AREA.maxY - DODGE_AREA.minY) + DODGE_AREA.minY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Optional safety: prevent click even if somehow clicked
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

// Yes button (page 2 comes later)
yesBtn.addEventListener("click", () => {
  alert("You chose YES 💖");
});
