const inputs = document.querySelectorAll('#code');
const number = document.querySelector('h2');
const submit = document.querySelector('.submit');

const pasteFn = event => {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  paste = paste.replace(/\s/g,'');
  const regex = /\d/;
  const current = parseInt(event.currentTarget.getAttribute("data-number"));
  if (!regex.test(paste) || paste.length > 6) {
    alert('You can paste only numbers and 6 charcters max!');
    return event.preventDefault();
  } 
  const split = paste.split('');
  for (let i = 0, x = current; i < split.length;i++,x++) {
    if (x <= 5) {
      inputs[x].value = split[i];
      inputs[x].focus();
    }
  }
}

const moveForward = event => {
  const regex = /\d/;
  const current = parseInt(event.currentTarget.getAttribute("data-number"));
  if (regex.test(event.data)) {
    event.data !== null && current < 5 ? inputs[current+1].focus() : '';
  }
  current === 5 ? setTimeout(() => submit.click(), 100) : '';
  // Check for more than one character
  if (inputs[current].value > 1) {
    inputs[current].value = inputs[current].value.slice(0,1);
  }
}

const moveBackward = event => {
  const current = parseInt(event.currentTarget.getAttribute("data-number"));
  if (event.key === 'Backspace' && current > 0) {
    event.preventDefault();
    inputs[current].value = null;
    inputs[current-1].focus();
  }
}

const codeVerification = () => {
  const code = number.textContent.replace(/\s/g,'');
  let userInputNum = '';
  inputs.forEach((num) => userInputNum += num.value);
  if (code === userInputNum) {
    alert('Very Good!');
    return true;
  } else {
    alert('Sorry this is not correct!');
    return false;
  }
}

inputs.forEach(el => el.addEventListener('paste', pasteFn));
inputs.forEach(el => el.addEventListener('input', moveForward));
inputs.forEach(el => el.addEventListener('keydown', moveBackward));