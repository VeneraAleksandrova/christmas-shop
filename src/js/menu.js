import { activeBodyHidden } from "./bodyHidden";

const burger = document.querySelector(".burger");
const menu = document.querySelector(".modal-menu");

function closeMenu(href = false) {
  activeBodyHidden(false);
  burger.classList.remove("burger_active");
  menu.style.left = "100%";
  menu.addEventListener("transitionend", () => removeMenu(event, href), {
    once: true,
  });
}

function closeMenuBurger() {
  if (window.innerWidth > 768 && burger.classList.contains("burger_active")) {
    closeMenu();
  }
}

function removeMenu(event, href) {
  if (event.propertyName === "left") {
    menu.classList.remove("menu__visible");
    if (href) window.location.href = href;
  }
}

export { closeMenu, closeMenuBurger };
