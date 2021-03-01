const greaterThan10 = num => {
  const myPromise = new Promise((resolve, reject) => {
  num >= 10 ? resolve(num) : reject(num);
  });
  return myPromise;
}

greaterThan10(8).catch((num) => {
  console.log(`${num} is lower than 10`);
});

greaterThan10(13).then((num) => {
  console.log(`${num} is equal or greater than 10`);
});