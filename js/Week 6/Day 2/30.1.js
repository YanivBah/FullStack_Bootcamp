const greaterThan10 = num => {
  const myPromise = new Promise((resolve, reject) => {
  num >= 10 ? resolve(`${num} is equal or greater than 10`) : reject(`${num} is lower than 10`);
  });
  return myPromise;
}

greaterThan10(8)
.then((text) => {console.log(text)})
.catch((text) => {console.log(text)});
greaterThan10(13)
.then((text) => {console.log(text)})
.catch((text) => {console.log(text)});