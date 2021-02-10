const array = ["Hello", "Good Day",
"Your Welcome", "hotdog", "hamburgers"];

function countLetters(arr) {
  const obj = {};
  const lettersArr = ["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const str = arr.sort().toString().toLowerCase();
  for (i = 0; i < lettersArr.length ; i++) {
    const specificLetterCount = (str.split(lettersArr[i]).length) - 1;
    if (specificLetterCount > 0) {
      obj[lettersArr[i]] = specificLetterCount;
    }
  }
  return obj;
};

console.log(countLetters(array));