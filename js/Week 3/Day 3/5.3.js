// if/else conditional expression

function isStrong(password) {
  if (password.length > 7) {return `Strong`;}
  return `Weak`;
}

console.log(isStrong('lalala'));


// ternary conditional expression
function isStrong2(password) {
  return (password.length > 7 ? 'Strong' : 'Weak');
}

console.log(isStrong2('lalalala'));

// && logical operator

function isStrong3(password) {
  if (typeof password === 'string' && password.length > 7) { return `Strong`;}
  return `Weak`;
}

console.log(isStrong('lalala'));

// “advanced” password validation 

function isStrong4(password) {
  let capitalChk = /[A-Z]/.test(password);
  return (password.length > 7 && capitalChk ? 'Very Strong' : password.length > 7 ? 'Strong' : 'Weak');
}

console.log(isStrong4('abcdefGhijk'));
console.log(isStrong4('lalalala'));
console.log(isStrong4('1234'));