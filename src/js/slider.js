const btn_right = document.querySelector(".btn-right");
const btn_left = document.querySelector(".btn-left");
function animationSlider() {
  let left = 0;
  let step = 0;

  let widthSection = document.querySelector(".sliders").offsetWidth;
  let widthSlider = document.querySelector(".slider-line").offsetWidth;
  let odds = widthSlider - widthSection;
  btn_right.addEventListener("click", () => {
    let steps = window.innerWidth > 768 ? 3 : 6;
    left += odds / steps;
    step++;
    if (step > steps - 1) {
      btn_right.classList.add("inactive");
    } else {
      btn_right.classList.remove("inactive");
      btn_left.classList.remove("inactive");
    }
    document.querySelector(".slider-line").style.left = -left + "px";
  });
  btn_left.addEventListener("click", () => {
    let steps = widthSection > 768 ? 3 : 6;
    left -= odds / steps;
    step--;

    if (step < 1) {
      btn_left.classList.add("inactive");
    } else {
      btn_right.classList.remove("inactive");
      btn_left.classList.remove("inactive");
    }
    document.querySelector(".slider-line").style.left = -left + "px";
  });
}

function resetLeft() {
  animationSlider();
  document.querySelector(".slider-line").style.left = 0 + "px";
  btn_left.classList.add("inactive");
  btn_right.classList.remove("inactive");
}

export { animationSlider, resetLeft };
