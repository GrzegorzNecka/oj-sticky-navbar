window.addEventListener("load", () => {
  document.querySelector("header.navbar");
});

window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header.navbar");
  const navbarTop = navbar.getBoundingClientRect().top;
  const navbarHeight = navbar.getBoundingClientRect().height;

  window.addEventListener("scroll", e => {
    console.log("window", this.scrollY);

    console.log("nav", navbarTop - navbarHeight);

    if ((navbar.getBoundingClientRect().top = 0)) {
      console.log("a");
    }
  });
});
