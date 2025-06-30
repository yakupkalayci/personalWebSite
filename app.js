function handleMobileMenu() {
  const openBtn = document.querySelector(".mobile-menu-open-btn");
  const closeBtn = document.querySelector(".mobile-menu-close-btn");
  const fixedMenu = document.querySelector("header .fixed-menu");

  openBtn.addEventListener("click", () => {
    fixedMenu.classList.add("opened");
  });

  closeBtn.addEventListener("click", () => {
    fixedMenu.classList.remove("opened");
  });
}

document.addEventListener("DOMContentLoaded", () => {    
  handleMobileMenu();
});
