
function matchMedia() {
  window.addEventListener("DOMContentLoaded", () => {
 
    const nav = document.querySelector("nav.navbar__menu");

    //match media

    const mobileViewport = window.matchMedia("screen and (max-width: 480px)");
    function setMediaQuery(mq) {
      if (mq.matches) {
        console.log("viewport <= 480px");
      } else {
        console.log("viewport > 480px");
      }
    }
    setMediaQuery(mobileViewport);

    mobileViewport.addListener(mq => setMediaQuery(mq));
  });
}

export default matchMedia;
