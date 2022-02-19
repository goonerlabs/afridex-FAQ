// set up for date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// set up for nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// open nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
