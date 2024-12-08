export function countdownTimer() {
  const year = new Date().getUTCFullYear() + 1;
  const deadline = new Date(`${year}-01-01T00:00:00.000Z`);
  const diff = deadline - new Date();
  setTimeout(countdownTimer, 1000);
  const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

  const d = document.querySelector(".days h2");
  const h = document.querySelector(".hours h2");
  const m = document.querySelector(".minutes h2");
  const s = document.querySelector(".seconds h2");

  d.textContent = days;
  h.textContent = hours;
  m.textContent = minutes;
  s.textContent = seconds;
}
