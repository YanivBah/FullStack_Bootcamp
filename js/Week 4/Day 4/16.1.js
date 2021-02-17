// Block 1
var b = 1; //Global scope variable
function someFunction(number) { //function declaration
  function otherFunction(input) { //function declaration
    return b; //return 5
  }
  b = 5; // assign b as 5 instead of 1
  return otherFunction; //return the otherFunction
}
var firstResult = someFunction(9); //function invoke -> return otherFunction as a function
var result = firstResult(2); //function invoke -> return 5


// Block 2
var a = 1; //Global scope variable
function b2() { //function declaration
  a = 10; //assign a as 10 instead of 1 only inside the function
  console.log(a);
  return; //return nothing = undefined
  function a() { } //function declaration
}
b2(); //function invoke -> return undefined
console.log(a); //log 1

//Block 3
debugger;
let i; //Global scope variable = undefined
for (i = 0; i < 3; i++) { //Loop 3 times and i = 2 and in the end i become 3 because of i++
  const log = () => { //function declaration
    console.log(i); //log i when the function invoked
  }
  setTimeout(log, 100); // this will run after the for lop finished and i = 3 so log 4 times the number 3
}