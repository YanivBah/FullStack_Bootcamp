// Filter Method
const myFilter = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {newArr.push(arr[i])}
  }
  return newArr;
}

const test = (val) => val === 1;
console.log(myFilter([1,2,3,4,1,7],test));

// ForEach Method
const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i],i,arr);
  }
}

const test1 = (val, index = '',array = []) => {
  console.log(`the value is ${val} at index ${index} and the array is [${array}]`);
}

myForEach([16,32,64],test1);

// Map Method

const myMap = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

const test2 = (val) => val * 2;
console.log(myMap([5,10,15,20,25,30],test2));

