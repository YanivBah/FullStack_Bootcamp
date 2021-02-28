function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
};

Pokemon.prototype.callPokemon = function () {
  return `I choose you, ${this.name}`;
}
Pokemon.prototype.attack = function (attackNumber) {
  return `${this.name} used ${this.attackList[attackNumber]}`;
}

const charmander = new Pokemon('Charmander','Fire',['Scratch','Ember','Dragon Breath','Smokescreen']);
const bulbasaur = new Pokemon('Bulbasaur','Grass',['Tackle','Vine Whip','Razor Leaf','Seed Bomb']);
const squirtle = new Pokemon('Squirtle','Water',['Water Gun','Bite','Tail Whip','Water Pulse']);

console.log(charmander.callPokemon());
console.log(charmander.attack(0));
console.log(bulbasaur.callPokemon());
console.log(bulbasaur.attack(2));
console.log(squirtle.callPokemon());
console.log(squirtle.attack(3));