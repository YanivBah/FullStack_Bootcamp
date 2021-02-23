const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', event => {
  if (document.querySelector('p')) {
    document.querySelector('p').remove();
  }
  const message = document.createElement('p');
  message.style.fontSize = '20px';
  if (input.value >= 18) {
    message.innerText = 'you can drink beer'
    document.body.appendChild(message);
  }
  else {
    message.innerText = `you're too young`;
    document.body.appendChild(message);
  }
})