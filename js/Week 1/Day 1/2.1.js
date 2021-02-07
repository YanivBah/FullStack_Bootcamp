function describeCountry(country, population, capitalCity) {
  // console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`);
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const first = describeCountry('Israel', '9', 'Jerusalem');
const second = describeCountry('Russia', '146', 'Moscow');
const third = describeCountry('Turkey', '83', 'Istanbul');

console.log(first);
console.log(second);
console.log(third);
