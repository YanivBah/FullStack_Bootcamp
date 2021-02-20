// Ex2.1 - Sum of lowest numbers
const sumOfLowest = (arr) => {
  arr.sort((a,b) => a - b)
  return arr[0] + arr[1]
}

console.log(sumOfLowest([19,5,42,2,77]));