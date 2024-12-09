export function hiddenScrollRight(widthAfter, widthBefore) {
  const computedStyle = getComputedStyle(document.body);
  if (widthAfter - widthBefore > 0) {
    document.body.style.paddingRight = `${widthAfter - widthBefore}px`;
  } else {
    document.body.style.paddingRight = "";
  }
}
