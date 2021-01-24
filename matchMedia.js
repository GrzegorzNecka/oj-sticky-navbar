function matchMedia() {
  window.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav.navbar__menu");
    const burgerMenu = document.querySelector(".burger-menu");
    const menuList = document.querySelector(".navbar__menu ul");
    //match media

    const mobileViewport = window.matchMedia("screen and (max-width: 480px)");
    function setMediaQuery(mq) {
      if (mq.matches) {
        //"viewport <= 480px";

        burgerMenu.classList.remove("burger-menu--hidden");
        menuList.classList.add("menu-list--hidden");

        document.body.classList.add("small-size");
      } else {
        //"viewport > 480px"
        burgerMenu.classList.add("burger-menu--hidden");
        menuList.classList.remove("menu-list--hidden");
        document.body.classList.remove("small-size");
      }
    }
    setMediaQuery(mobileViewport);

    mobileViewport.addListener(mq => setMediaQuery(mq));
  });
}

export default matchMedia;
