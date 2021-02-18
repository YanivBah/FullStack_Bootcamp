// Ex2.1 - Sum of lowest numbers
const sumOfLowest = (array) => {
  const sortedArr = array.sort((a,b) => a - b);
  return sortedArr[0] + sortedArr[1];
}

console.log(sumOfLowest([19,5,42,2,77]));