const organize = (str1,str2) => {
  const obj = {};
  const arr = [];
  [...str1.split(''),...str2.split('')].forEach(letter => {
    obj.hasOwnProperty(letter) ? obj[letter] += 1 : obj[letter] = 1;
  })
  console.log(obj);
  for (const [key] of Object.entries(obj)) {arr.push(key)};
  return arr.sort().join('');
}

console.log(organize('xyaabbbccccdefww','xxxxyyyyabklmopq'));