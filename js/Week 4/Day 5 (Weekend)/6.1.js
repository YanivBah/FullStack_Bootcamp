// Ex6.1 - Mumbling
const accum = (str) => {
  const arr = str.toUpperCase().split('');
  for (let i = 0,x=1; i<str.length;i++,x++) {
    arr[i] = arr[i].repeat(x);
    arr[i] = arr[i][0] + arr[i].slice(1).toLowerCase();
  }
  return arr.join('-')
}


console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));