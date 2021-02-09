function lightOrDark(color) {
  const color2 = color.toLowerCase();
  switch (color2) {
    case 'yellow':
    case 'pink':
    case 'orange':
      return `Light Color`;
    case 'blue':
    case 'purple':
    case 'brown':
      return `Dark Color`;
    default:
      return `Unknown Color`;
  }
}

console.log(lightOrDark('PINK'));
console.log(lightOrDark('yellow'));
console.log(lightOrDark('Orange'));
console.log(lightOrDark('BLuE'));
console.log(lightOrDark('purple'));
console.log(lightOrDark('BrOWn'));
console.log(lightOrDark('Cyan'));