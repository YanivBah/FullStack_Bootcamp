// Q1 & Q2
const arr1 = Array.from({ length: 100});
arr1.fill({name: 'Yaniv', age: 23}, 0, 100);
//console.table(arr1);

// Q5
console.log(Array.isArray(arr1));

// Q6
const arr2 = [...arr1];

const arr3 = arr1.splice(0,49);