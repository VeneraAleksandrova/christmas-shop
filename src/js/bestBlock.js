import { renderGift } from "./giftContainer";
import { data } from "../json";
export function renderBestBlock() {
  const best_block = document.querySelector(".best-gifts__block");
  const arr = randomNumberArray();
  arr.forEach((element) => {
    renderGift(data[element], best_block);
  });
}

function randomNumberArray() {
  let set = new Set();
  while (set.size < 4) {
    set.add(Math.floor(0 + Math.random() * (data.length - 1 + 1 - 0)));
  }
  return Array.from(set);
}
