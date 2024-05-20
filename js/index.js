const logo = document.querySelector(".header__logo");
const headerTop = document.querySelector(".header-top");
const headerBottom = document.querySelector(".header-bottom");
const links = document.querySelectorAll(".menu__link");
const nav = document.querySelector(".nav");
const btn = document.querySelector(".burger__btn");

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

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    headerBottom.style.borderBottom = "1px solid #116466";
  } else {
    headerBottom.style.borderBottom = "none";
  }
});
