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
