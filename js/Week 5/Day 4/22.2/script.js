const checkbox = document.querySelector('#checkbox');
const img = document.createElement('img');
img.src = 'https://source.unsplash.com/random/800x600';
img.alt = 'Random Images Each Refresh';
img.width = 500;

checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.querySelector('.container').appendChild(img);
  } else {
    img.remove();
  }
})