function handleMobileMenu() {
  const openBtn = document.querySelector(".mobile-menu-open-btn");
  const closeBtn = document.querySelector(".mobile-menu-close-btn");
  const fixedMenu = document.querySelector("header .fixed-menu");
  const mainMenuBtns = fixedMenu.querySelectorAll(".main-menu a");

  openBtn.addEventListener("click", () => {
    fixedMenu.classList.add("opened");
  });

  closeBtn.addEventListener("click", () => {
    fixedMenu.classList.remove("opened");
  });

  mainMenuBtns.forEach((item) => {
    item.addEventListener("click", () => {
      const isFixedMenuOpened = fixedMenu.classList.contains("opened");
      if (isFixedMenuOpened) {
        fixedMenu.classList.remove("opened");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  handleMobileMenu();
});
