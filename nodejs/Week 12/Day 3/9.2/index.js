const colors = ["red", "blue", "green", "yellow", "pink"];
const h1 = document.querySelector('h1');
setInterval(() => {
  const fontSize = Number(window.getComputedStyle(h1).getPropertyValue("font-size").replace('px',''));
  h1.style.fontSize = fontSize + 0.2 + 'px';
}, 100);