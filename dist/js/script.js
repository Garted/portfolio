const burger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".cross");

burger.addEventListener("click", () => {
  overlay.style.left = "0";
  overlay.style.top = "0";
});

cross.addEventListener("click", () => {
  overlay.style.left = "-100%";
  overlay.style.top = "-100%";
});

const percs = document.querySelectorAll(".percent");
const lines = document.querySelectorAll(".line");

percs.forEach((perc, i) => {
  lines[i].style.width = perc.innerHTML;
});
