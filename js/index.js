const logo = document.querySelector(".header__logo");
const header = document.querySelector(".header");
const links = document.querySelectorAll(".menu__link");
const nav = document.querySelector(".nav");
const btn = document.querySelector(".burger__btn");
const dropdown = document.querySelectorAll(".zuRBuRYvnAFfepe");

function addBurger() {
  btn.addEventListener("click", addStyle);
  links.forEach((link) => {
    link.addEventListener("click", addStyle);
  });
}
function addStyle() {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
}
addBurger();
