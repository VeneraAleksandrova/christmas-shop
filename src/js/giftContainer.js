import { data } from "../json";
import { renderModalGift } from "./modalGift";
import { hiddenScrollRight } from "./scrollRight";
import { activeBodyHidden } from "./bodyHidden";
function renderGiftContainer(filter) {
  const gift_container = document.querySelector(".gift-container");
  gift_container.innerHTML = ``;
  if (filter === "all") {
    data.forEach((element) => {
      renderGift(element, gift_container);
    });
  } else {
    data
      .filter((element) => element.category.toLowerCase() === filter)
      .forEach((gift, i) => renderGift(gift, gift_container));
  }
}

function renderGift({ name, category }, block) {
  const gift = document.createElement("div");
  gift.className = "gift";
  gift.id = name;
  const img = document.createElement("img");
  img.src = `./src/img/gifts/${category.slice(4).toLowerCase()}.png`;
  img.alt = category;
  gift.appendChild(img);

  const gift_title = document.createElement("div");
  gift_title.className = "gift__title";
  const h4 = document.createElement("h4");
  h4.className = category.slice(4).toLowerCase();
  h4.textContent = category;
  gift_title.appendChild(h4);
  const h3 = document.createElement("h3");
  h3.textContent = name;
  gift_title.appendChild(h3);

  gift.appendChild(gift_title);

  block.append(gift);
  gift.addEventListener("click", () => openModalGift(name));
}

function openModalGift(id) {
  const clientWidth = document.documentElement.clientWidth;
  renderModalGift(data.find((gift) => gift.name === id));
  activeBodyHidden(true);
  hiddenScrollRight(document.documentElement.clientWidth, clientWidth);
}

export { renderGift, renderGiftContainer };
