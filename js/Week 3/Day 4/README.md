# 7.1 - Book

1. Create an object that represents a book. It should have 4-5 properties that
   make sense for a book to have.

2. Then write a function that has one argument, a book, that will return the
   following description from your book object:
   `The book <book name> was written by <author name> in the year <publishing year>...`

3. Write an if statement inside your function to help Sarah figure out if your
   country is right for her. You will need to write a condition that accounts
   for all of Sarah's criteria. Take your time with this, and check part of the
   solution if necessary.

---

# 7.2 - Object Methods

1. Create an object called ‘mycountry’ for a country of your choice, containing
   properties ‘country’, ‘capital’, ‘language’, ‘population’ and ‘neighbours’
   (an array)

2. Add a method to the object called 'describe' to the 'myCountry' object. With
   the help of the ‘this’ keyword, this method will log a string like this to
   the console:
   `Finland has 6 million people, their mother tongue is Finnish, they have 3 neighbouring countries and a capital called Helsinki`

3. Call the ‘descrbie method’.

4. Add a method called 'checkIsland' to the 'myCountry' object. This method will
   set a new property on the object, called 'isIsland'.'isIsland' will be true
   if there are no neighbouring countries, and false if there are. Use the
   ternary operator to set the property.

---

# 7.3 - Book Utilities

1. create 2 book objects with properties: name, author, year.

2. create an empty object bookUtils (utils = short for utilities).

3. add to to the bookUtils object a function getFirstPublished, that recieves 2
   books and returns the book with the smaller year.

4. add to to the bookUtils object a function setNewEdition, that recieves a book
   and an edition year and sets a new property latestEdition with the edition
   year, or updates an existing one.

5. add to to the bookUtils object a setLanguage function, that recieves a book
   and a language and sets a new property language with the languahe, or updates
   an existing one.

6. add to to the bookUtils object a setTranslation function, that recieves a
   book a language and a translator, and sets a new property of translation,
   which is an object that contains the translator and the language.

7. add to to the bookUtils object a setPublisher function, that recieves a book
   a name and a location, and sets a new property named publisher, which is an
   object that contains the name and location.

8. add to to the bookUtils object a function isSamePublisher, that recieves 2
   books and checks if the publisher name and location are identical in the 2
   books.

---

# 7.4 - Candy Store

Here is a candyStore object:

1. Implement the following getCandy function: The function should return the
   candy element with the specified id. function getCandy(candyStore, id){ }

2. Implement the following getPrice function: The function should return the
   price (number) of the candy with the specified id. function
   getPrice(candyStore, id){ }

3. Implement the following addCandy function: The function should add a new
   candy to the candy list in candyStore with a default amount of 1. The
   function will not return anything. function addCandy(candyStore, id, name,
   price){ }

4. Implement the following buy function: The function should add the candy price
   to the cashRegister, and decrease the amount property of the relevant candy.
   function buy(candyStore, id){ }

---

# 7.5 - Candy Store

Create a function that takes one argument, an array. Use this array:

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

to count over all the letters and return an object with the letter as the key
and the letter count as the value.

Expected output:{ h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w:
1, c: 1, m: 2, t: 1, b: 1, s: 1 }

---

# 7.6 - Object iteration

1. Create a function that receives 1 argument, an object and returns a new
   object with the properties and values swapped.
