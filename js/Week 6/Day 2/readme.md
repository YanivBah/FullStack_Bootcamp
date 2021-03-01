# 28.1 - Who is Stronger

1. What is wrong with the code? explain in your own words
2. Fix the code so that invoking the whoIsStronger function will print "I am
   stronger".

note: you cannot change the 'hero' or the whoIsStronger function.

```sh
const hero = {
  health: 5,
  power: 68,
  getStrength: function(){
    if (this.health <= 5){
      return this.power - 10;
    } else return this.power;
  }
}
  function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
      return "I am stronger";
    } else return "You are stronger";
  }
```

---

# 28.2 - Print Name

Create an object with a name property. The object should also have a method that
prints its name, and another method that prints its name after a second with the
help of setTimeOut. in this exercise, you are not allowed to use arrow
functions.

---

# 28.3 - Heroes

We have an array of super heroes objects:

```sh
const wonderWoman = {
  name: "Diana Prince"
}
const batman = {
  name: "Bruce Wayne"
}

const superHeroes = [wonderWoman, batman];
```

and a print name function:

```sh
function printName() {
  console.log(`my name is ${this.name}`);
}
```

We want to print the all heroes names. Implement the printHeroes function:

- Note: you cannot change the super heroes objects

```sh
function printHeroes(heroes, printFunc) {
  //add your code here
}
```

---

# 30.1 - Greater than 10

Write a function that takes a number as an argument and returns a Promise that
tests if the value is less than or greater than the value 10. If it is greater
than 10 it is resolved, if it is less than 10 it is rejected. Call the function
and print the resolve and reject in a .then, .catch.
