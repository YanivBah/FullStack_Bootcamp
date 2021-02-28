# 26.1 - Fundamentals of this

Answer the following questions.

---

# 26.2 - Super Powers

Your Task: Edit the storm object. Invoke the printSuperPower function using the
storm object as the context of the function. So your output should be: my super
power is flying. Well, Storm also controls the weather, so, whatever you choose!

- You cannot change the printSuperPower function

---

# 27.1 - isSquare

You are given a function, Square, that takes four parameters, a, b, c, d,
denoting the length of the square edges. Using prototype properties, add a
method to Square named isSquare that prints true if a Square object has equal
edges and false if they are unequal. Here is the Square function:

```sh
function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
```

---

# 27.2 - Pokemon

You are given a function, Pokeman, that takes three parameters, pokemonName,
pokemonType, an array of different pokemon attack methods, pokemonAttackList.

1. Create three instances of the Pokemon and save them in a variable.
2. Using prototype properties, add the following methods:

- A method called callPokemon that will print the following: “I choose you,
  `<pokemon name>`

- method called attack that takes one parameter, an attack number, that will
  print the specific attack method from the pokemonAttackList array as the
  following: “`<pokemon name>` used `<attack method>`”

```sh
function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}
```

---

# 27.3 - Build your own methods

1. Build your own filter method with the help of prototypes
2. Build your own find method with the help of prototypes
3. Build your own reduce method with the help of prototypes
