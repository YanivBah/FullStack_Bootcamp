//Ex6.4 - isogram
const isogram = (str) => {
  str = str.toLowerCase();
  const obj = {arr: [],};
  str.split('').forEach(letter => obj.hasOwnProperty(letter) ? obj.arr.push(false) : obj[letter] = 1);
  return obj.arr.every(Boolean);
}

console.log(isogram('Dermatoglyphics'));
console.log(isogram('aba'));
console.log(isogram('moOse'));