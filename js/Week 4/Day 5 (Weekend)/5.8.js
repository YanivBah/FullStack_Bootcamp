// Ex5.8 - longest words version 2
const longestWord = (str) => {
  return str.split(' ')
  .reduce((long, short) => long.length > short.length ? long : short);}

console.log(longestWord('I am str'));