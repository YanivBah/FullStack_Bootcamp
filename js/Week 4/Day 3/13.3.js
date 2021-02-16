const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareArrs = (arr1,arr2) => {
  const dishes = [];
  for (let dish of arr1) {
    for (let dish2 of arr2) {
      dish === dish2 ? dishes.push(dish) : '';
    };
  };
  return dishes.length > 0 ? `This dishes are the same: ${dishes}` : false;
}

console.log(compareArrs(food,food1));