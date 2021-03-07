const database = {
  name: '',
}

const databaseReset = () => {
  database.cardsDeck = [
    'club1','club2','club3','club4','club5','club6','club7','club8','club9','club10','club11','club12',
  'heart1','heart2','heart3','heart4','heart5','heart6','heart7','heart8','heart9','heart10','heart11','heart12'];
  database.flippedCards = [];
  database.wrongGuesses = 0;
  database.matches = 0;
  database.score = 0;
  database.secondCount = 0;
  database.minuteCount = 0;
}

const startGame = () => {
  const name = document.querySelector('input[name="fname"]').value;
  const pairs = parseInt(document.querySelector('input[name="pairs"]').value);
  databaseReset();
  const guesses = document.querySelector('.guesses');
  guesses.textContent = database.wrongGuesses;
  const score = document.querySelector('.score');
  const second = document.querySelector('.second');
  const minute = document.querySelector('.minute');
  second.textContent = '00';
  minute.textContent = '00';
  score.textContent = database.score.toString();
  database.name = name;
  database.pairs = pairs;
  document.querySelector('.start-menu').classList.add('hidden');
  const grid = document.querySelector('.cards-grid')
  grid.classList.remove('hidden');
  if (pairs*2 % 5 === 0) {
    grid.style.gridTemplateColumns = `repeat(5, 1fr)`;
  }else {
    grid.style.gridTemplateColumns = `repeat(4, 1fr)`;
  } 
  //  else if (pairs*2 % 4 === 0) {
  //   grid.style.gridTemplateColumns = `repeat(4, 1fr)`;
  // } 
  document.querySelector('.scores').classList.remove('hidden');
  generateCard(pairs);
}

const randomCard = (max) => parseInt(Math.random() * max);

const generateCard = (pairs) => {
  const cardsDeck = database.cardsDeck;
  let boardCards = [];
  const cardsGrid = document.querySelector('.cards-grid');
  for (let i = 0;i<pairs;i++) {
    const index = randomCard(database.cardsDeck.length - 1);
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front','flipped');
    cardFront.setAttribute('data-card-type',cardsDeck[index]);
    cardsDeck.splice(index,1);
    card.appendChild(cardBack);
    card.appendChild(cardFront);
    boardCards.push(card);
    const copyCard = card.cloneNode(true);
    boardCards.push(copyCard);
  }
  for (let i = 0;i<pairs*2;i++) {
    const index = randomCard(boardCards.length - 1);
    cardsGrid.appendChild(boardCards[index]);
    boardCards.splice(index,1);
  }
  const backCards = document.querySelectorAll('.card-back');
  backCards.forEach(card => {
    setTimeout(() => card.classList.add('flipped'),800);
    setTimeout(() => card.nextSibling.classList.remove('flipped'),800);
    setTimeout(() => card.classList.remove('flipped'),3000);
    setTimeout(() => card.nextSibling.classList.add('flipped'),3000);
  });
  eventListener(true);
  const scoresDIV = document.querySelector('.scores');
  scoresDIV.classList.remove('hidden');
  setTimeout(() => timer(true),3300);
}

const isPair = () => {
  const flippedCards = database.flippedCards;
  const card1 = flippedCards[0].nextSibling.getAttribute('data-card-type');
  const card2 = flippedCards[1].nextSibling.getAttribute('data-card-type');
  const score = document.querySelector('.score');
  if (card1 !== card2) {
    flippedCards[0].classList.remove('flipped');
    flippedCards[0].nextSibling.classList.add('flipped');
    flippedCards[1].classList.remove('flipped');
    flippedCards[1].nextSibling.classList.add('flipped');
    database.wrongGuesses++;
    const guesses = document.querySelector('.guesses');
    guesses.textContent = database.wrongGuesses;
  } else {
    const time = parseFloat(`${database.minuteCount}.${database.secondCount}`);
    database.score += parseInt(100 / time);
    database.matches++;
    console.log(`Pairs:`,database.pairs,`Matches`,database.matches);
    if (database.matches === database.pairs) {
      timer(false);
      eventListener(false);
      showMessage(true);
    }
  }
  score.textContent = database.score.toString()
  database.flippedCards = [];
}

const showCard = (e) => {
  const current = e.target;
  const flippedCards = database.flippedCards;
  if (current.classList.contains('card-back') && flippedCards.length < 2) {
    current.classList.add('flipped');
    current.nextSibling.classList.remove('flipped');
    const card = current.nextSibling.getAttribute('data-card-type');
    flippedCards.push(current);
    console.log(card);
  }
  if (flippedCards.length === 2) {
    eventListener(false);
    setTimeout(isPair, 800);
    setTimeout(eventListener,1000);
    // isPair(e);
  }
}

const eventListener = (boolean = true) => {
  const cardsGrid = document.querySelector('.cards-grid');
  if (boolean) {
    console.log('EventListener Enabled');
    cardsGrid.addEventListener('click', showCard);
  } else if (!boolean) {
    console.log('EventListener Disabled');
    cardsGrid.removeEventListener('click', showCard);
  }
}

const timer = (boolean) => {
  if (boolean) {
    secondInterval = setInterval(() => {
      const second = document.querySelector('.second');
      database.secondCount < 59 ? database.secondCount++ : database.secondCount = 0;
      second.textContent = `${parseInt(database.secondCount)}`.padStart(2,0);
    }, 1000);
    minuteInterval = setInterval(() => {
      const minute = document.querySelector('.minute');
      database.minuteCount < 60 ? database.minuteCount++ : database.minuteCount = 0;
      minute.textContent = `${parseInt(database.minuteCount)}`.padStart(2,0);
    }, 60000);
  } else {
    clearInterval(secondInterval);
    clearInterval(minuteInterval);
  }
}

const showMessage = (boolean) => {
  const msg = document.querySelector('.message');
  if (boolean) {
    const name = document.querySelector('.name');
    const guesses = document.querySelector('.win-guess');
    const score = document.querySelector('.win-score');
    name.textContent = `${database.name}, `;
    guesses.textContent = `${database.wrongGuesses}`;
    score.textContent = `${database.score}`;
    msg.classList.remove('hidden');
    document.querySelector('.cards-grid').classList.add('blur');
  } else {
    msg.classList.add('hidden');
  }
}

const resetGame = () => {
  showMessage(false);
  const grid = document.querySelector('.cards-grid');
  grid.classList.remove('blur');
  document.querySelector('.start-menu').classList.remove('hidden');
  grid.innerHTML = '';
  grid.classList.add('hidden');
  document.querySelector('.scores').classList.add('hidden');
}

const startGameButton = document.querySelector('.startGame');
startGameButton.addEventListener('click', startGame);
const newGame = document.querySelector('.newGame');
newGame.addEventListener('click', resetGame);