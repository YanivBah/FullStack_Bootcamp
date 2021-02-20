// Ex6.2 - Counting Duplicates
const duplicate = (str) => {
  const obj = {};
  let message = ``;
  str.toLowerCase().split('').forEach(letter => {
    obj.hasOwnProperty(letter) ? obj[letter] += 1 : obj[letter] = 1;
  });
  for (const [key, value] of Object.entries(obj)) {
    if (value > 1) {
      message += `The letter ${key} occurs ${value} times\n`;
    }
  } return message.length ? message : `No character repeats more than once`;
}

// console.log(duplicate('abcde'));
// console.log(duplicate('aabbcde'));
console.log(duplicate('Indivisibilities'));