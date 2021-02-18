// Ex2.4 - Unique
const findUniq = (arr) => {
  const newArr = arr.sort((a,b) => a - b);
  const obj = {};
  newArr.forEach(n => obj.hasOwnProperty(n) ? obj[n]++ : obj[n] = 1);
  return Object.keys(obj).find(key => obj[key] === 1);
}

console.log(findUniq([1,1,1,2,1,1]));
console.log(findUniq([0,0,0,0.55,0,0]));