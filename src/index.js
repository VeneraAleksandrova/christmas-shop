import { renderGiftContainer } from "./js/giftContainer";
import { countdownTimer } from "./js/timer";
import { animationSlider } from "./js/slider";
import { renderBestBlock } from "./js/bestBlock";
import { scrollUp } from "./js/buttonUp";
import { changeActiveFilter } from "./js/filter";
import { resetLeft } from "./js/slider";
import { burgerOpenClose } from "./js/burger";
import { closeMenuBurger } from "./js/menu";

const giftPage = document.querySelector(".gift-page");
const indexPage = document.querySelector(".index-page");

const burger = document.querySelector(".burger");
const filters = document.querySelectorAll(".filter");

function loadIndexPage() {
  renderBestBlock();
  countdownTimer();
  animationSlider();
  window.addEventListener("resize", resetLeft);
}

function loadGiftPage() {
  renderGiftContainer("all");
  window.addEventListener("scroll", scrollUp);
  filters.forEach((filter) =>
    filter.addEventListener("click", () => changeActiveFilter(event))
  );
}

function loadPage() {
  indexPage && loadIndexPage();
  giftPage && loadGiftPage();

  burger.addEventListener("click", burgerOpenClose);
}

window.addEventListener("load", loadPage);
window.addEventListener("resize", closeMenuBurger);
