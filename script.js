const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
