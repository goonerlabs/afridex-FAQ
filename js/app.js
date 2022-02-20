// set up for date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// set up for nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navItems = document.getElementById("nav-items");

// open nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// close nav navlink
navItems.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
