const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const wrapper = document.querySelector(".button-wrapper");

// Initial position for "No"
let noX = wrapper.offsetWidth - noBtn.offsetWidth - 40;
let noY = 50;

noBtn.style.left = noX + "px";
noBtn.style.top = noY + "px";

// Dodge logic (stay inside wrapper)
noBtn.addEventListener("mouseenter", () => {
  const maxX = wrapper.offsetWidth - noBtn.offsetWidth - 20;
  const maxY = wrapper.offsetHeight - noBtn.offsetHeight - 20;

  const minX = wrapper.offsetWidth / 2;
  const minY = 20;

  const randomX = Math.random() * (maxX - minX) + minX;
  const randomY = Math.random() * (maxY - minY) + minY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Yes button → next page
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});
