// DOM elements

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

const Nav = document.querySelector(".menu-nav");

const menuItems = document.querySelectorAll(".nav-item");

let menuOpen = false;

const toggleMenu = () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("show");
    Nav.classList.add("show");
    menuItems.forEach((item) => item.classList.add("show"));
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("show");
    Nav.classList.remove("show");
    menuItems.forEach((item) => item.classList.remove("show"));
    menuOpen = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);
