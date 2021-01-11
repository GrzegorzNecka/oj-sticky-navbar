// window.addEventListener("load", () => {
//   const navbar = document.querySelector("header.navbar");

//   const navbarTop = navbar.getBoundingClientRect().top;

//   console.log(navbarTop);
// });

window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header.navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;

  window.addEventListener("scroll", e => {
    const navbarTop = navbar.getBoundingClientRect().top;

    console.log("window", this.scrollY);
    console.log("nav", navbarTop);
  });
});
