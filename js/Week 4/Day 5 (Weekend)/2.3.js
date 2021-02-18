// Ex2.3 - Find the Next Perfect Square
const findNextSquare = (num) => {
  if (Math.sqrt(num)%1 === 0) {
    for (let i = num+1 ; i > num ; i++) {
      if (Math.sqrt(i) %1 === 0) {
      return i;
      }
    }
  } else return '-1'
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));