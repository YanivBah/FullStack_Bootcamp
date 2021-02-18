// Ex4.1 - Fibonacci
const fibonacci = (n) => {
  const arr = [1,1];
  for (let i = 2;i < n ; i++) {
    let next = arr[i-1] + arr[i-2]
    arr.push(next);
  }
  return arr.join();
}
console.log(fibonacci(12));