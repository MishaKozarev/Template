const logo = document.querySelector(".header__logo");
const links = document.querySelectorAll(".menu__link");
const menu = document.querySelector(".menu");
const btn = document.querySelector(".burger__btn");
const dropdown = document.querySelectorAll(".faq__title");

function addBurger() {
  btn.addEventListener('click', addStyle);
  links.forEach((link) => {
    link.addEventListener('click', addStyle);
  });
}
function addStyle() {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
  logo.classList.toggle("active");
}
addBurger();