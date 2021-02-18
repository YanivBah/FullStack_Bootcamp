// Ex3.2 - People on the Bus
const peopleOnTheBus = (arr) => {
  let getOn = 0;
  let getOff = 0;
  for (let i = 0; i < arr.length ; i++) {
    getOn += arr[i][0];
    getOff += arr[i][1];
  }
  return getOn - getOff >= 0 ? getOn - getOff : '';
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