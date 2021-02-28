// Q1
console.log(this); // point to the window object because it inside the global scope.

// Q2
const myObj = {
  name: "Timmy",
  greet: () =>  {
    console.log(`Hello ${this.name}`);
  },
};

myObj.greet(); //point to window object - can be fixed with function declaration instead of arrow

// Q3
const myFuncDec = function () {
  console.log(this);
};

myFuncDec(); // point to the window object - because anonymous function

// Q4
const myFuncArrow = () => {
  console.log(this);
};

myFuncArrow(); //point to the window object - because it is an arrow function

// Q5
document.querySelector(".element").addEventListener(() => {
console.log(this);
}); //point nowhere because written wrong - can be fixed with adding event type and it will point to the element.