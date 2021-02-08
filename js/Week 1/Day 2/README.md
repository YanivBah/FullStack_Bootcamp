# 3.1 - Declaring Functions

- Please reformat the following function declarations to function expression.
- Please reformat the following function expressions to function declarations.

---

# 3.2 - Declaring Functions

- Please reformat the following function expressions to IIFE functions.
- Please reformat the following function declarations in two ways, explicit
  return and implicit return functions.

---

# 3.3 - Declarations vs Expressions

1. The world population is 7900 million people. Create a function declaration
   called 'percentageOfWorld1' which receives a 'population' value, and returns
   the percentage of the world population that the given population represents.
   For example, China has 1441 million people, so it's about 18.2% of the world
   population.
2. To calculate the percentage, divide the given 'population'value by 7900 and
   then multiply by 100.
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
   store the results into variables, and log them to the console.
4. Create a function expression which does the exact same thing, called
   'percentageOfWorld2', and also call it with 3 country populations (can be the
   same populations)

---

# 4.1 - Number of Siblings

1. Declare a variable 'numSiblings' based on a prompt inputlike this:
   `prompt('How many siblings do you have?');`
2. If you have one sibling, log to the console `1 sibling!` (use loose equality
   == for now).
3. Use an else-if block to log `More than 1 sibling` in case `numSiblings` is
   greater than 1.
4. Use an else block to log `No siblings` (this block will be executed when
   `numSiblings` is 0 or any other value).
5. Test the code with different values of `numSiblings`, including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
   `numSiblings`. Notice what happens when there is exactly 1 sibling! Why is
   this happening?
7. Finally, convert `numSibling` to a number, and watch what happens now when
   you input 1

---

# 4.2 - Grade Assigner

Create a function that takes 1 argument, a number score. Returns either “A”,
”B”, “C”, “D”, “F”. score of:

- 0-64 is a “F”
- 65-69 is a “D”
- 70-79 is a “C”
- 80-89 is a “B”
- 90-100 is an “A"

---

# 4.3 - Basketball Score

John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and
123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the
   winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into
   account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
   points. Like before, log the average winner to the console.
5. Like before, change the scores to generate different winners, keeping in mind
   there might be draws.

---

# 4.4 - 7 BOOM

Write a function that takes one argument n, an integer Print out all the numbers
between 1 to n. If the number is only divisible by 7 print “BOOM” If the number
is divisible by 7 and also includes the digit 7 print “BOOM-BOOM”. If either of
the above cases print the number. 1,2,3,4,5,6,
BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18. Use the includes method to find out
if the number includes a 7.

---

# 4.5 - Leap Year

Create a JS function to determine whether or not a given year is a leap year.
The function should take a year as an argument: Determine whether or not it is a
leap year. If the given year is a leap year, the program should print "It is
indeed a leap year", otherwise the program will print "This is not a leap year.

Every year that is divisible by 4 is a leap year except for the ones that are
also divisible by 100, unless it is divisible by 400. Example: 2012 is a leap
year 2100 is not But 2400 is.
