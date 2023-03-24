AOS.init();

const navbarMenu = document.getElementById("navbar-menu");
const navbarToggle = document.getElementById("navbar-toggle");
const navbarDrawer = document.getElementById("navbar-drawer");
const navbarClose = document.getElementById("navbar-close");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden");
  navbarDrawer.classList.toggle("hidden");
});

navbarClose.addEventListener("click", () => {
  navbarMenu.classList.add("hidden");
  navbarDrawer.classList.add("hidden");
});

let mybutton = document.getElementById("ScrollToTop");

// document.body.scrollTop = 0;
// document.documentElement.scrollTop = 0;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "hidden";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
