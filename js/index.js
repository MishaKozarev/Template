const header = document.querySelector("header");
const logo = document.querySelector(".header__logo");
const links = document.querySelectorAll(".menu__link");
const menu = document.querySelector(".menu");
const btn = document.querySelector(".burger__btn");

function addBurger() {
  btn.addEventListener("click", addStyle);
  links.forEach((link) => {
    link.addEventListener("click", addStyle);
  });
}
function addStyle() {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
  logo.classList.toggle("active");
}
addBurger();

window.addEventListener("scroll", function () {
  if (window.scrollY > 350) {
    header.style.backgroundColor = "rgb(46, 55, 70";
  } else {
    header.style.backgroundColor = "";
  }
});
