const arr = ['boo', 'doooo', 'hoo', 'ro'];
const newArr = [];

function lengthStrArr(array) {
  for (i = 0 ; i < array.length ; i++) {
    newArr.push(array[i].length);
  }
  return newArr;
}

console.log(`Before:`);
console.log(arr);
console.log(`After:`);
console.log(lengthStrArr(arr));