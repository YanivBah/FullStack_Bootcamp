const arr = [1,2,3,4,5];
const arr1 = [1,'hello',2,'hey',3,4,'whatsuppp',5];
const doubleValuesArr = [];
const onlyEvenValuesArr = [];

// Question 1
const doubleValues = function(id) {
  doubleValuesArr.push(id*2);
}
arr.forEach(doubleValues);

// Question 2
const onlyEvenValues = function(id) {
  id %2 === 0 ? onlyEvenValuesArr.push(id) : null;
}
arr.forEach(onlyEvenValues);

// Question 3
const showFirstAndLast = function (array) {
  const newArr = [];
  array.forEach(val => typeof val === 'string' ? newArr.push(val) : null);
  const first = newArr[0];
  const last = newArr[newArr.length - 1];
  return typeof first === 'string' && typeof last === 'string' ? [first,last] : 'Nothing is a string';
}

showFirstAndLast(arr1);

// Question 4
const vowelCount = function (string) {
  const newArr = string.toLowerCase().split('');
  const obj = {};
  const regex = /^[aeiou]$/i
  newArr.forEach(val => {
    if (regex.test(val)) {
      obj.hasOwnProperty(val) ? obj[val]++ : obj[val] = 1
    }
  });
  return obj;
}

vowelCount('aaaeeeiiiibbbnnncccdddeeo');

// Question 5
const capitalize = function (string) {
  const newArr = string.split('');
  newArr.forEach((val,index) => newArr[index] = newArr[index].toUpperCase())
  return newArr.join('');
}

capitalize('hello my name is yaniv');

// Question 6
const shiftLetters = function (string) {
  const newArr = string.split('');
  newArr.forEach((val,index) => newArr[index] = String.fromCharCode((newArr[index].charCodeAt() - 1)));
  newArr.forEach((val,index) => newArr[index] === '`' ? newArr[index] = 'z' : null);
  newArr.forEach((val,index) => newArr[index] === '@' ? newArr[index] = 'Z' : null);
  return newArr.join('');
}

shiftLetters('abcdefghijklmnopqrstuvwxyz');

// Question 7
const swapCase = function (string) {
  const newArr = string.split(' ');
  newArr.forEach((val,index) => index %2 === 0 ? newArr[index] = capitalize(newArr[index]) : null)
  return newArr.join(' ')
}

console.log(swapCase(`test one two three four five six seven`));