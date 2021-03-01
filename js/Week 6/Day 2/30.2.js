const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'string') {
        reject(`This array does not contain only strings!`);
      }
      array[i] = array[i].toUpperCase();
    }
    resolve(array);
  });
}

const sortWords = array => array.sort()

makeAllCaps(['abc','ghi','jkl','def'])
.then((array) => console.log(sortWords(array)))
.catch(err => console.log(err))
.then(() => {
  makeAllCaps(['hello','bye',12])
  .then((array) => console.log(sortWords(array)))
  .catch(err => console.log(err))
});
