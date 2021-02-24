const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const secondsMove = () => {
  const now = new Date();
  console.log(now.getSeconds());
  const nowSecond = now.getSeconds() * 6;
  second.style.transform = `rotate(${nowSecond}deg)`;
}
const minutesMove = () => {
  const now = new Date();
  const nowMinutes = now.getMinutes() * 6;
  minute.style.transform = `rotate(${nowMinutes}deg)`;
}
const hoursMove = () => {
  const now = new Date();
  const x = () => now.getHours() > 12 ? now.getHours()-12 : parseInt(now.getHours());
  const nowHour = x() * 30 + (60 / 2);
  console.log(`nowHour: ${nowHour} hour:${x()}`);
  hour.style.transform = `rotate(${nowHour}deg)`;
}

const setImmediateInterval = (fn, ms) => {
  fn();
  return setInterval(fn,ms);
}
setImmediateInterval(secondsMove, 1000);
setImmediateInterval(minutesMove, 60000);
setImmediateInterval(hoursMove, 60000);