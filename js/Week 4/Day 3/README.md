# 12.1 - Fun with Reduce

Write the following functions using the reduce built-in function.

1. max
2. sum of even numbers
3. average

---

# 13.1 - Loops in loops

Have this array of array’s of neighbouring countries: const listOfNeighbours = [
["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"], ];

With the use of two for loops, console log all the countries one by one and in
your terminal. You should see something like this in your terminal:
Neighbour:Canada

Neighbour: Mexico

Neighbour: Spain

Neighbour: Norway

Neighbour: Sweden

Neighbour: Russia

---

# 13.2 - While Loop

1. Recreate the challenge from the exercise 6.4- looping_with_arrays ,but this
   time using a while loop.

- Create an array containing 4 population values of 4 countries of your choice.
  Store this array into a variable called 'populations'
- Create a function called ‘populationPercentages’ that takes the population
  array as an argument.
- Inside the function, create an empty array called ‘percentages’.
- Use a for loop to iterate over the population array you received as an
  argument..
- On each iteration use the function we created earlier (module 3,
  ex.3.3-declarations vs expressions) for each element of the array.
- Push the result to the ‘percentages’ array.
- Return from the function the ‘percentages’ array.

2. Reflect on what solution you like better for this task: the for loop or the
   while loop?

---

# 13.3 - compare the arrays

You are given two arrays:

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

Create a function that takes these two arrays as arguments. Compare these two
arrays using 2 for loops and return the items that are the same. If none are the
same return false.

---

# 14.1 - get sum

- Note: We ask you not to solve the bug by finding it with your eyes but to use
  the debugging tools we've learned!

What is wrong with this code?

1. First find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all.

function getSum(arr1, arr2){

const sum = 0;

for (let i=0; i < arr1.length; i++){

    sum += arr1[i];

}

for (let i=0; i < arr2.length; i++){

    sum += arr2[i];

}

}

getSum([1,2,3][5,66,23]);
