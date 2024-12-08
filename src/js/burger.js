import { activeBodyHidden } from "./bodyHidden";
import { closeMenu } from "./menu";

const menuItems = document.querySelectorAll(".modal_list_item");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".modal-menu");

function burgerOpenClose() {
  if (burger.classList.contains("burger_active")) {
    closeMenu();
  } else {
    burger.classList.add("burger_active");
    menu.style.left = 0;
    menu.classList.add("menu__visible");
    activeBodyHidden(true);
    menuItems.forEach((item) =>
      item.addEventListener("click", (event) => {
        event.preventDefault();
        if (item.classList.contains("inactive__item")) {
          closeMenu();
        } else {
          closeMenu(event.target.href);
        }
      })
    );
  }
}

export { burgerOpenClose };
