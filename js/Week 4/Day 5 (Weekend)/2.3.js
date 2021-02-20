// Ex2.3 - Find the Next Perfect Square
const findNextSquare = (num) => {
  let sqrt = Math.sqrt(num);
  return sqrt %1 === 0 ? Math.pow(++sqrt,2) : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));