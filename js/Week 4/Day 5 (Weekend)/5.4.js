const toWeirdCase = (str) => {
  const arr = str.split(' ');
  for (let i = 0 ; i < arr.length ; i++) {
    const newArr = arr[i].split('');
    newArr.reduce((acc, current, index) => {index === 0 || index %2 === 0 ? newArr[index] = newArr[index].toUpperCase() : '' }, 0)
    arr[i] = newArr.join('');
  }
  return arr.toString().replace(/,/gi, ' ');
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
