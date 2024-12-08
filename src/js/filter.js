import { renderGiftContainer } from "./giftContainer";
const filters = document.querySelectorAll(".filter");

export function changeActiveFilter(event) {
  filters.forEach((filter) => filter.classList.remove("active-filter"));
  event.target.classList.add("active-filter");
  const activeFilter = document.querySelector(".active-filter");
  renderGiftContainer(activeFilter.textContent);
}
