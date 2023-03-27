const navbarMenu = document.getElementById("navbar-menu"),
  navbarToggle = document.getElementById("navbar-toggle"),
  navbarDrawer = document.getElementById("navbar-drawer"),
  navbarClose = document.getElementById("navbar-close");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden"),
    navbarDrawer.classList.toggle("hidden");
}),
  navbarClose.addEventListener("click", () => {
    navbarMenu.classList.add("hidden"), navbarDrawer.classList.add("hidden");
  });
let mybutton = document.getElementById("ScrollToTop");
function scrollFunction() {
  200 < document.body.scrollTop || 200 < document.documentElement.scrollTop
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "hidden");
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
window.onscroll = function () {
  scrollFunction();
};
