const data = [{name: "John",birthday: "1-1-1995",favoriteFoods: {meats: ["hamburgers", "sausages"],fish: ["salmon", "pike"],},},{name: "Mark",birthday: "10-5-1980",favoriteFoods: {meats: ["hamburgers", "steak", "lamb"],fish: ["tuna", "salmon", "barracuda"],},},{name: "Mary",birthday: "1-10-1977",favoriteFoods: {meats: ["ham", "chicken"],fish: ["pike"],},},{name: "Thomas",birthday: "1-10-1990",favoriteFoods: {meats: ["bird", "rooster"],fish: ["salmon"],},},{name: "Mary",birthday: "1-10-1977",favoriteFoods: {meats: ["hamburgers", "lamb"],fish: ["anchovies", "tuna"],},},];

const returnNames = data.map(function (id,index,array) {
  return array[index].name
});

console.log(returnNames);

const bornBefore1990 = data.map(function (id,index,array) {
  return Date.parse(1-1-1990) > Date.parse(array[index].birthday) ? array[index] : '';
})
console.log(bornBefore1990);

const returnFood = () => {
  const obj = {};
  const foodArr = [];
  data.map(function (id,index,array) {
    array[index].favoriteFoods.meats.map(function (id) {
      const str = id.toString()
      foodArr.push(str)
    })
    array[index].favoriteFoods.fish.map(function (id) {
      const str = id.toString()
      foodArr.push(str)
    })
  })
  foodArr.forEach(val => obj.hasOwnProperty(val) ? obj[val]++ : obj[val] = 1);
  return obj;
}

console.log(returnFood());