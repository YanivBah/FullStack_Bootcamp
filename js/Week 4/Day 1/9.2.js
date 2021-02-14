const numbers = [1, -5, 666, 2, 400, 11];
numbers.sort((x, y) => x - y);

console.log(numbers);

numbers.sort((x, y) => y - x); //descending to ascending
console.log(numbers); //ascending to descending