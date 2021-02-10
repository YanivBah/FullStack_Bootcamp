const mycountry = {
  country: 'Nepal',
  capital: 'Kathmandu',
  language: 'Nepali',
  population: '28 million',
  neighbours: ['India', 'Tibet'],
  describe: function() {
    return `${this.country} have ${this.population} people, their offical language is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  },
  
  checkIsland: function() {
    this.neighbours.length > 0 ? this.isIsland = false : this.isIsland = true
  },
};

console.log(mycountry.describe());
mycountry.checkIsland();
console.log(mycountry);


