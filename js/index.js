const logo = document.querySelector(".header__logo");
const header = document.querySelector(".header");
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

const dropdown = document.querySelectorAll(".OiWyhbnIkVqwXyx");
const toggleDropdown = (element) => {
  element.currentTarget.classList.toggle("faq__visible");
  const item = element.currentTarget.nextElementSibling;
  if (element.currentTarget.classList.contains("faq__visible")) {
    item.style.maxHeight = "350px";
  } else {
    item.style.maxHeight = 0;
  }
};
if (dropdown) {
  dropdown.forEach((element) => {
    element.addEventListener("click", toggleDropdown);
  });
}
