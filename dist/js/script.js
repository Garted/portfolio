const burger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const cross = document.querySelector(".cross");
const socials = document.querySelector(".socials");
const promo = document.querySelector(".promo");

burger.addEventListener("click", () => {
  overlay.style.left = "0";
  overlay.style.top = "0";
});

cross.addEventListener("click", () => {
  overlay.style.left = "-100%";
  overlay.style.top = "-100%";
});
