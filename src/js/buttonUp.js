const btn_up = document.querySelector(".btn-up");

export function scrollUp() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  scrollY > 300 ? show() : hide();

  btn_up.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
}

function show() {
  btn_up.classList.remove("btn-up_hide");
}
function hide() {
  btn_up.classList.add("btn-up_hide");
}
