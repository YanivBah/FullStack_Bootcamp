// Ex5.7 - shortest words
const shortestWord = (str) => {
  return str.split(' ')
  .reduce((short, long) => long.length < short.length ? long : short);}

console.log(shortestWord('I am str'));