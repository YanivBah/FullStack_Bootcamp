// Ex5.8 - shortest words version 2
const shortestWord = (str) => {
  return str.split(' ')
  .reduce((long, short) => long.length > short.length ? long : short);}

console.log(shortestWord('I am str'));