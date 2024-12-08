export function activeBodyHidden(flag) {
  const body = document.querySelector("body");
  flag ? (body.style.overflow = "hidden") : (body.style.overflow = "");
}
