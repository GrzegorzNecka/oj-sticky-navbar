window.addEventListener("load", () => {
  const nav = document.querySelector("nav.navbar__menu");
  const navTop = nav.offsetTop;

  function stickyNavigation() {
    if (window.scrollY >= navTop) {
      document.body.classList.add("fixed-nav");
    } else {
      document.body.classList.remove("fixed-nav");
    }
  }
  window.addEventListener("scroll", stickyNavigation);
});

window.addEventListener("DOMContentLoaded", () => {



  
});
