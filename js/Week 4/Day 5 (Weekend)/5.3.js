// Ex5.3 - To Camel Case
const toCamelCase = (str) => {
  if (str.includes('-')) {str = str.replace(/-/gi,'_');};
  const arr = str.split('_');
  for (let i = 1 ; i < arr.length ;i++) {
    arr[i] = arr[i].split('')[0].toUpperCase() + arr[i].split('').join('').slice(1);
  }
  return arr.join(' ');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));