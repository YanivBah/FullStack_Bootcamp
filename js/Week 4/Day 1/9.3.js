const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
console.log(foods);
foods.sort(); //sort by abc
console.log(foods);
foods.sort().reverse(); // sort by reverse abc
console.log(foods);
console.log(`----------------------------------------------------------------`);
const foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple"];
console.log(foodsWithUpperCase);

//sort by abc
foodsWithUpperCase.sort(function(a, b) {
  if (a.toUpperCase() < b.toUpperCase()) {
    return -1;
  }
  if (a.toUpperCase() > b.toUpperCase()) {
    return 1;
  }
  return 0;
});
console.log(foodsWithUpperCase);

//sort by reverse abc
foodsWithUpperCase.sort(function(a, b) {
  if (a.toUpperCase() > b.toUpperCase()) {
    return -1;
  }
  if (a.toUpperCase() < b.toUpperCase()) {
    return 1;
  }
  return 0;
});
console.log(foodsWithUpperCase);
console.log(`----------------------------------------------------------------`);
//sort by longest word
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words);
words.sort((x, y) => y.length - x.length);

console.log(words);