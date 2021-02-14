# 8.1 - Maps with Objects

1. Create 3 separate objects that their key is called name and their value is a
   string. Store them in separate variables.
2. Create a new Map object that sets each object as a key and assign an id
   number as the value.
3. Iterate over the Map object with the for..of loop. -log the name and id

---

# 8.2 - Maps vs Objects performance

One important practice is performance analysis. The JavaScript engines have made
astounding strides in the performance of JavaScript, but that’s no excuse for
writing sloppy and inefficient code. A good way to measure your performance is
with console.time

constmaxCount=1000000; console.time("My operation")// <---- Starts the timer
for(let i = 0 ; i < maxCount ; i++) { //Perform the operation to be measured
multiple times} console.timeEnd("My operation") // <---- Stops the time

Because a single operation of a given code happens much to quickly to measure
reliably, we need to perform the codemany times to get a measurable value.
Usually we should perform the code tens of thousands of times, or even millions
depending on the code being measured.Though the exact times can change depending
on your system and version of Node.js you can get the general ideaof how fast or
slow your code is.

1. Who can add key and value pairs faster in a for loop?

- Create an empty Object and assign it to a variable.
- Create a start timer for your object to be measured.
- Create a for loop that will iterate a million times. Inside your for loop on
  each iteration create a new key, value pair to your object using the variable
  I.
- Do the same procedure for a Map object.
- Compare the times. You may be surprised from the results :)

2. Who can find faster a specific property from itself? Now that we populated
   100000 properties to our object’s find the following:

- Find out how long time would it take for the Object to find a specific
  property from itself.
- Find out how long time would it take for the Map to finda specific property
  from itself.

3. Who is faster in adding a single entry?

4. Who is faster in deleting a single entry?

---

# 9.1 - Callback Functions

1. Write a a function called ‘isString’ that receives 2 arguments, a string and
   a callback function. The function checks that the string is indeed a
   string.If the string is a string, pass the string to a callback function
   which logs that string to the console.

2. Create a function called ‘firstWordUpperCase’ that receives 2 arguments, a
   string and a callback function. The function will capitalize the first word
   in the sentence and pass the string to a callback function which will create
   dashes between the words.

3. Call the ‘firstWordUpperCase’ function with a callback of your choice.

4. Create your own function that will receive from one of itsarguments a
   callback function.

---

# 9.2 - Sorting Numbers

Use the array of numbers below and answer the following questions:
`const numbers = [1, -5, 666, 2, 400, 11];`

1. Sort the array of numbers from descending to ascending order.
2. Sort the array of numbers from descending to ascending order.

---

# 9.3 - Sorting Strings

Answer the following questions:

a. Array of words
`const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];`

1. Sort the array of strings from descending to ascending order
1. Sort the array of strings from ascending to descending order

b. Lets sort an array of words that includes a word with an uppercase:
`const foodsWithUpperCase = ["falafel","Sabich","hummus","pizza with extra pineapple"];`

1. Sort the array of strings from descending to ascending order
1. Sort the array of strings from ascending to descending order

c. Longest Word
`const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];`

1. Sort the array of strings from the longest word to the shortest word only
   using the sort function
