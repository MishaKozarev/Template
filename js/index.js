const logo = document.querySelector(".header__logo");
const links = document.querySelectorAll(".menu__link");
const nav = document.querySelector(".nav");
const btn = document.querySelector(".burger__btn");
const dropdown = document.querySelectorAll(".XzWavikWCeprySw");

// function addBurger() {
//   btn.addEventListener("click", addStyle);
//   links.forEach((link) => {
//     link.addEventListener("click", addStyle);
//   });
// }
// function addStyle() {
//   btn.classList.toggle("active");
//   nav.classList.toggle("active");
//   logo.classList.toggle("active");
// }
// addBurger();

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
  console.log("Hello");
}
