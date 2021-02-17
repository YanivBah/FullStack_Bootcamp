// Block 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}

funcA(); 

/* This will run the funcA and log the a with "undefined" instead
of 1 because of hoisting and log the return from foo function (2) */

// Block 2
var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    }
  }
};

console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

/* The first log will log the name 'Aurelio De Rosa'
And the second log of test() will not work because test is not function.
it should be: 
              var test = obj.prop.getFullName();
              console.log(test);
*/

// Block 3

function funcB() {
  var a = b = 0;
  a++;
  return a;
}
funcB();
console.log(b);
console.log(typeof a);
console.log(typeof b);

/* The first log will return undefined because because it cant find 'a' which is block scoped
The second log will return type of 'number' because of hoisting.
Can be fixed by deleting var before 'a' */

// Block 4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

/* Both funcC function invoked will log 2 because hoisting and they habe the same name 
and the bottom one will overwrite the first one.
Can be fixed by using different name functions */

// Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);

/* first log will return 1 and the second will throw error 
because 'e' is a scoped to the funcD2 function block 
Can be fixed with deleting the var before 'e' */

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

/* first log will return the string with undefined in the end because hoisting f = undefined.
The second log will return 'f' value of 1 because it declared and assigned for a number before
invoking the function.
Can be fixed by moving the first log after the f declaration. */
