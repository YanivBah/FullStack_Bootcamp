const populations = [9, 146, 83, 324];
const percentages = [];
let count = 0;

while (count !== populations.length - 1) {
  const totalPopulation = 7900;
  percentages.push((populations[count] / totalPopulation) * 100);
  count++;
}

console.log(percentages);