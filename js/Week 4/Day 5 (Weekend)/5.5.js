// Ex5.5 - Abbreviate two words
const abbreviate = (str) => {
  const arr = str.split(' ')
  return arr[0].slice(0,1) + '.' + arr[1].slice(0,1);
}

console.log(abbreviate('Sam Harris'));