// Ex5.6 - Mask
const maskify = (str) => {
  let newStr = '';
  str.length > 4 ? newStr += '#'.repeat(str.length - 4) + str.slice(str.length-4) : newStr = str;
  return newStr;
}

console.log(maskify('4556364607935616'));
console.log(maskify('Skippy'));
console.log(maskify('1'));
console.log(maskify('22'));
console.log(maskify('333'));