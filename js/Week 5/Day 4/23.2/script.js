const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const mili = document.querySelector('.miliseconds');
let miliCount = 0;
let secondCount = 0;
let minuteCount = 0;

const miliMove = () => {
  miliCount < 99 ? miliCount++ : miliCount = 0;
  mili.textContent = `${parseInt(miliCount)}`.padStart(2,0);
}
const secondMove = () => {
  secondCount < 59 ? secondCount++ : secondCount = 0;
  second.textContent = `${parseInt(secondCount)}`.padStart(2,0);
}
const minuteMove = () => {
  minuteCount < 60 ? minuteCount++ : minuteCount = 0;
  minute.textContent = `${parseInt(minuteCount)}`.padStart(2,0);
}

const timer = (what) => {
  if (what === 'start') {
    miliInterval = setInterval(miliMove, 10);
    secondInterval = setInterval(secondMove, 1000);
    minuteInterval = setInterval(minuteMove, 60000);
  } else if (what === 'stop') {
    clearInterval(miliInterval);
    clearInterval(secondInterval);
    clearInterval(minuteInterval);
  }
};


const start = document.querySelector('.start');
start.addEventListener('click', () => timer('start'));
const stop = document.querySelector('.stop');
stop.addEventListener('click', () => timer('stop'));