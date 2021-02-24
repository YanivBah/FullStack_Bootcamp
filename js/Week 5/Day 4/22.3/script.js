const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let randomLetter = '';
let alreadyPressed = {};
const message = document.querySelector(".message");
const hiddenLetter = document.querySelector('.hiddenletter').firstElementChild;
const message2 = document.querySelector("h2");

const reset = () => {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  message.textContent = 'Click on the keyboard to guess the letter.';
  message.style.color = '#d8dee9';
  document.querySelectorAll('.keybox').forEach(el => el.remove());
  if (document.querySelector('button')) {
    document.querySelector('button').remove();
  }
  message2.textContent = 'Keys pressed:';
  hiddenLetter.textContent = '?';
  window.addEventListener('keydown', keysPressed);
  alreadyPressed = {};
  console.log(`The letter is ${randomLetter}`);
}

const keysPressed = e => {
  // Check a-z/A-Z
  const regex = /^[a-zA-Z]$/;
  const key = e.key.toLowerCase();
  if (!(regex.test(e.key))) {
    message.textContent = 'This is not an alphabetical letter';
    message.style.color = "#BF616A";
    message.style.fontWeight = '700';
  }
  // Correct answer
  if (key === randomLetter) {
    hiddenLetter.textContent = randomLetter;
    message.textContent = 'Your guess is correct!';
    message.style.color = "#A3BE8C";
    message.style.fontWeight = '700';
    message2.textContent = 'Want to start a new game?'
    document.querySelectorAll('.keybox').forEach(el => el.remove());
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Yes!';
    document.querySelector('.keys').appendChild(button);
    window.removeEventListener('keydown', keysPressed);
    button.addEventListener('click', reset);
  } 
  // Wrong Answer
  else {
    if (!(alreadyPressed.hasOwnProperty(key)) && regex.test(key)) {
      const letter = document.createElement('div');
      letter.classList.add('keybox');
      letter.textContent = key;
      document.querySelector('.keys').appendChild(letter);
      message.textContent = 'Your guess is wrong!';
      message.style.color = "#BF616A";
      message.style.fontWeight = '700';
    } else if (regex.test(key)) {
      message.textContent = 'You already tried this letter!';
      message.style.color = "#BF616A";
      message.style.fontWeight = '700';
    }
    alreadyPressed.hasOwnProperty(key) ? alreadyPressed[key]++ : alreadyPressed[key] = 1;
  }
}

reset();

