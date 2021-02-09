const populations = [9, 146, 83, 324];

function populationPercentages(populations) {
  const percentages = [];
  for (i = 0 ; i < populations.length ; i++) {
    const totalPopulation = 7900;
    percentages.push(((populations[i] / totalPopulation) * 100).toFixed(2))
  }
  return percentages;
}

console.log(populationPercentages(populations));