const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

// Make the "No" button dodge the cursor
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".button-wrapper");

  const maxX = wrapper.offsetWidth - noBtn.offsetWidth;
  const maxY = wrapper.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// When "Yes" is clicked, go to page 2
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});
