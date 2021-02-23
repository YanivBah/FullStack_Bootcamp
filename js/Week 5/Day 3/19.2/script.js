const codeBox = document.querySelectorAll('#code');
const numbercode = document.querySelector('h2');
const submit = document.querySelector('.submit');

const pasteEvent = () => {
  for (let i = 0; i < codeBox.length ; i++) {
    codeBox[i].addEventListener('paste', event => {
      let paste = (event.clipboardData || window.clipboardData).getData('text');
      paste = paste.replace(/\s/g,'');
      if (!/\d/.test(paste) || !(paste.length <= 6)) {
        alert('You can paste only numbers and 6 charcters max!');
        return event.preventDefault();
      }
      const split = paste.split('');
      for (let y = i, x = 0; y < split.length ; y++,x++) {
        codeBox[y].value = split[x];
        codeBox[y].focus();
      }
      console.log(paste);
    })
  }
}

const moveInput = () => {
  for (let i = 0; i < codeBox.length; i++) {
    codeBox[i].addEventListener('input', event => {
      if (/\d/.test(event.data)) {
        if (event.data !== null && i !== 5) {
        codeBox[i+1].focus();
        }
      } else {
        i !== 5 ? codeBox[i].value = null : '';
      }
      if (i === 5) {
        setTimeout(() => submit.click(), 100)
      }
    })
    codeBox[i].addEventListener("keydown", event => {
      if (event.key === 'Backspace' && i !== 0) {
        event.preventDefault();
        codeBox[i].value = null;
        codeBox[i-1].focus();
      }
    })
  }
}

const chkCode = () => {
  const numberVerify =  numbercode.textContent.replace(/\s/g,'');
  let inputNumbers = '';
  codeBox.forEach((num) => inputNumbers += num.value);
  if (numberVerify === inputNumbers && numberVerify.length === 6) {
    alert('Very Good!');
    return true;
  } else {
    alert('Sorry this is not correct!');
    return false;
    }
}

submit.addEventListener("submit", event => {
  if (!chkCode()) {
    event.preventDefault();
    window.history.back();
  }
})

pasteEvent();
moveInput();

// codeBox[0].addEventListener('paste', (event) => {
//   let paste = (event.clipboardData || window.clipboardData).getData('text');
//   console.log(paste.replace(/\s/g,''));
// })