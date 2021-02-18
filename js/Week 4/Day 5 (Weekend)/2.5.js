// Ex2.5 - Summation
const summation = (num) => {
  let sumOfAll = 0;
  for (let i = 1; i <= num ;i++) {
    sumOfAll += i;
  } return sumOfAll;
}

console.log(summation(8));