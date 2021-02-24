const player1 = document.querySelector("#player1-race");
let countPlayer1 = 0;
let scorePlayer1 = 0;
const player2 = document.querySelector("#player2-race");
let countPlayer2 = 0;
let scorePlayer2 = 0;
const finishLines = document.querySelectorAll('.finish');

const reset = () => {
  // debugger;
  document.querySelector('button') ? document.querySelector('button').remove() : '';
  // document.querySelectorAll('active').forEach(el => console.log(el.classList));
  document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
  player1.firstElementChild.classList.add('active');
  player2.firstElementChild.classList.add('active');
  window.addEventListener('keyup', move);
  countPlayer1 = 0;
  countPlayer2 = 0;
}

const move = (e) => {
  let select;
  e.key === "ArrowRight" ? select = player1 : '';
  e.key.toLowerCase() === "d" ? select = player2 : '';
  const button = document.createElement('button');
  button.textContent = "Start Over?"
  button.addEventListener('click', reset);

  if (e.key === "ArrowRight" && countPlayer1 <= 10) {
    const all = select.querySelectorAll('td');
    const current = all[countPlayer1];
    current.classList.remove('active');
    all[countPlayer1+1].classList.add('active');
    countPlayer1++;
    if (finishLines[0].classList.contains('active')) {
      scorePlayer1++;
      document.querySelector('.player1-score').textContent = `Red Car Score = ${scorePlayer1}`
      window.removeEventListener('keyup', move);
      document.body.appendChild(button);
    }
  } else if (e.key.toLowerCase() === "d" && countPlayer2 <= 10) {
    const all = select.querySelectorAll('td');
    const current = all[countPlayer2];
    current.classList.remove('active');
    all[countPlayer2+1].classList.add('active');
    countPlayer2++;
    if (finishLines[1].classList.contains('active')) {
      scorePlayer2++;
      document.querySelector('.player2-score').textContent = `Yellow Car Score = ${scorePlayer2}`
      window.removeEventListener('keyup', move);
      document.body.appendChild(button);
    }
  }
}

reset();
