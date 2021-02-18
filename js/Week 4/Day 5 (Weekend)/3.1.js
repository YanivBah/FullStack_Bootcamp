// Ex3.1 - Growth Of Population
const nbYear = (p0, percent, aug, p) => {
  let totalPopulation = p0;
  const percents = percent / 100;
  for (let i = 1 ; totalPopulation <= p ; i++) {
    totalPopulation += (totalPopulation * percents) + aug;
    if (totalPopulation === p || totalPopulation > p) {
      return `It will take ${i} years to get from ${p0} population to ${Math.trunc(totalPopulation)}`
    };
  }
}

console.log(nbYear(1000,2,50,1200));
console.log(nbYear(1500,5,100,5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));