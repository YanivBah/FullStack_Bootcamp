function percentageOfWorld1(population) {
  const totalPopulation = 7900;
  return (population / totalPopulation) * 100;
}

const israel = percentageOfWorld1(9.3);
const russia = percentageOfWorld1(146.2);
const germany = percentageOfWorld1(83.1);

console.log(`Israel is about ${israel.toFixed(2)}% population of the world.`);
console.log(`Russia is about ${russia.toFixed(2)}% population of the world.`);
console.log(`Germany is about ${germany.toFixed(2)}% population of the world.`);

// 

const percentageOfWorld2 = function(population) {
  const totalPopulation = 7900;
  return (population / totalPopulation) * 100;
}

const israel2 = percentageOfWorld1(9.3);
const russia2 = percentageOfWorld1(146.2);
const germany2 = percentageOfWorld1(83.1);

console.log(`Israel is about ${israel2.toFixed(2)}% population of the world.`);
console.log(`Russia is about ${russia2.toFixed(2)}% population of the world.`);
console.log(`Germany is about ${germany2.toFixed(2)}% population of the world.`);



