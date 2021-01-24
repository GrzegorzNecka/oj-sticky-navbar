function hamburger() {
  window.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav.navbar__menu");

    const burgerMenu = document.createElement("div");

    burgerMenu.classList.add("burger-menu");
    burgerMenu.id = "menuToggle";
    burgerMenu.innerHTML = `
    <button>
      <span></span>
      <span></span>
      <span></span>
    </button>
    `;

    nav.appendChild(burgerMenu);
  });
}

export default hamburger;
