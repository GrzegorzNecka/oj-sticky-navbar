

window.addEventListener("load", () => {
  const nav = document.querySelector("header.navbar");
  const navTop = nav.offsetTop;

  function stickyNavigation() {
    console.log("navTop = " + navTop);
    console.log("scrollY = " + window.scrollY);

    if (window.scrollY >= navTop) {
      document.body.classList.add("fixed-nav");
    } else {
      document.body.classList.remove("fixed-nav");
    }
  }
  window.addEventListener("scroll", stickyNavigation);
});

