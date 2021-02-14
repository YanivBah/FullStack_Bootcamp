const obj1 = {name: 'Israel',};
const obj2 = {name: 'Shlomi',};
const obj3 = {name: 'Oded',};

const map = new Map();
map.set(obj1, 1);
map.set(obj2, 2);
map.set(obj3, 3);

for (const [object, value] of map) {
  console.log(`The name is ${object.name} and the id is ${value}`);
}