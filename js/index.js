const logo = document.querySelector(".header__logo");
const links = document.querySelectorAll(".menu__link");
const linksBtn = document.querySelector(".header__btn-burger");
const nav = document.querySelector(".nav");
const btn = document.querySelector(".burger__btn");

function addBurger() {
  btn.addEventListener("click", addStyle);
  links.forEach((link) => {
    link.addEventListener("click", addStyle);
  });
  linksBtn.addEventListener("click", addStyle);
}
function addStyle() {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
  logo.classList.toggle("active");
}
addBurger();
