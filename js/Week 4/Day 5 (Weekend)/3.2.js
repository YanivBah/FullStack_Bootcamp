// Ex3.2 - People on the Bus
const peopleOnTheBus = (arr) => {
  let people = 0;
  arr.forEach((val) => {
    people += val[0];people -= val[1];
  });
  return people >= 0 ? people : '';
}

console.log(peopleOnTheBus(
  [
    [10,0],
    [6,4],
    [9,2],
    [4,7],
    [1,3],
    [3,9]
  ]
));