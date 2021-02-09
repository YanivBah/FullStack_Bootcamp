# 5.1 - Country to live in

1. Create a function called ‘countryToLiveIn’ that takes 4 parameters:
   `language`, `isIsland`, `population` and `country`.

isIsland’s argument value should be true or false. population’s argument
valueshould be an integer. country should be a string of a country. Language
should be a string.

2. Let's say Sarah is looking for a new country to live in. She wants to live in
   a country that speaks English, has less than 50 million people and is not an
   island.

3. Write an if statement inside your function to help Sarah figure out if your
   country is right for her. You will need to write a condition that accounts
   for all of Sarah's criteria. Take your time with this, and check part of the
   solution if necessary.

4. If yours is the right country, log a string like this: 'You should live in
   Finland. If not, log 'Finland does not meet your criteria'.

5. If your country does not meet all the criteria, go back and temporarily
   change some argument values in order to make the condition true.

---

# 5.2 - Languages

1. Create a function that takes one parameter, a language.

2. Use a switch statement to log the following string for thegiven
   'language':mandarin: 'MOST number of native speakers!'spanish: '2nd place in
   number of native speakers'english: '3rd place'hindi: 'Number 4'arabic: '5th
   most spoken language'for all other simply log 'Not in the top 5'

---

# 5.3 - Password Validation

Create a simple password validation function that takes a password string as an
argument.

If the passwords length is more than 7 characters return “Strong”. If it is less
than 7 characters long return “Weak.

1. Create a function that uses a if/else conditional expression.
2. Create a function that uses a ternary conditional expression.
3. Create a function that uses a && logical operator.
4. Create an “advanced” password validation function that takes a password
   string as an argument. If the password length is more than 7 characters long
   and has at least one capital letter return “Very Strong”. If the password
   length in only 7 characters long return “Strong”.If the password length is
   less than 7 characters long return “Weak”Use only a ternary conditional
   expression.

---

# 5.4 - Dark or light color

Create a function that receives one argument, a string color. Create a switch
statement that:

1. If the color is yellow, pink or orange return from the function “light
   color”.

2. If the color is blue, purple, brown return from the function “dark color”

3. If the color is none of the above return “Unknown color”.

---

# 6.1 - Simple for loop

There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this
to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

---

# 6.2 - Array Basics

For each of the questions below, answer the question’s with this array:
`const people = ["Greg", "Mary", "Devon", "James"];`

1. Using a loop, iterate through this array and console.log all of the people.

2. Write the command to remove "Greg" from the array.

3. Write the command to remove "James" from the array.

4. Write the command to add "Matt" to the front of the array.

5. Write the command to add your name to the end of the array.

6. Using a loop, iterate through this array and after console.log-ing
   "Mary",exit from the loop.

7. Write the command to make a copy of the array using slice. The copy should
   NOT include "Mary" or "Matt".

8. Write the command that gives the indexOf where "Mary" is located.

9. Write the command that gives the indexOf where "Foo" is located (this should
   return-1).

10. Redefine the people variable with the value you started with. Using the
    splice command, remove "Devon" from the array and add "Elizabeth" const
    people = ["Greg", "Mary", "Devon", "James"]; and "Artie". Your array should
    look like this when you are done ["Greg","Mary", "Elizabeth", "Artie",
    "James"].

11. Create a new variable called withBob and set it equal to the people array
    concatenated with the string of "Bob".

---

# 6.3 - Length of Strings

Write a function that will receive an array of strings and will return a new
array containing all the lengths of all the strings in the array it got as a
parameter.

So that if you call this function with this array for example: ["boo", "doooo",
"hoo","ro"] it will return this array: [3, 5, 3, 2].

---

# 6.4 - Looping Arrays

1. Create an array containing 4 population values of 4 countries of your
   choice.Store this array into a variable called 'populations'

2. Create a function called ‘populationPercentages’ that takes the population
   array as an argument.

3. Inside the function, create an empty array called ‘percentages’.

4. Use a for loop to iterate over the population array you received as an
   argument.

5. On each iteration use the function we created earlier (module 3,
   ex.3.3-declarations vs expressions) for each element of the array.

6. Push the result to the ‘percentages’ array

7. Return from the function the ‘percentages’ array.

---

# 6.5 - Fun with arrays

1. Fill an array with 100 of a same object using array fill method.

2. Create an array with numbers ranging from 1-100 using the Array.from method.

3. Convert only values of an object into one array.

4. Convert an array into one object.

5. Find out if an array is an array.

6. Copy an array.

- Create a copy of an array that won’t effect the originalarray if modified.
- Create a copy of an array that will effect the original array if modified.
