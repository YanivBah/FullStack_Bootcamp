// Ex4.2 - Tribonacci
const tribonacci = (arr) => {
  debugger;
  if (arr.length === 3 && arr[0] >= 0 && arr[1] >= 0 && arr[2] >= 0) {
    for (let i = 3;i < 10 ; i++) {
    let next = arr[i-1] + arr[i-2] + arr[i-3]
    arr.push(next);
    }
     return arr.toString();
  } else return []
}

console.log(tribonacci([1,1,1]));
console.log(tribonacci([0,0,1]));