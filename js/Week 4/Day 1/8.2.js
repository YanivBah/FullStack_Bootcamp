const obj = {};

console.time('Timer for Object Loop');

for (let i = 1 ; i <= 1000000 ; i++) {obj[i] = i;};

console.timeEnd('Timer for Object Loop');

const map = new Map();

console.time('Timer for Map Loop');

for (let i = 1 ; i <= 1000000 ; i++) {map.set(i,i);};

console.timeEnd('Timer for Map Loop');

console.log(`========= Question 2 =========`);
console.time('Timer for Object to find property');
console.log(obj['1997']);
console.timeEnd('Timer for Object to find property');

console.time('Timer for Map to find property');
console.log(map.get(1997));
console.timeEnd('Timer for Map to find property');

console.log(`========= Question 3 =========`);
console.time('Timer for Object to add entry');
obj[1000001] = 1000001;
console.timeEnd('Timer for Object to add entry');

console.time('Timer for Map to add entry');
map.set(1000001,1000001);
console.timeEnd('Timer for Map to add entry');

console.log(`========= Question 4 =========`);
console.time('Timer for Object to delete entry');
delete obj[1000001];
console.timeEnd('Timer for Object to delete entry');

console.time('Timer for Map to delete entry');
map.delete(1000001);
console.timeEnd('Timer for Map to delete entry');