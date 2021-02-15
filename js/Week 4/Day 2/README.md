# 10.1 - map vs forEach

You are getting an array of objects of the recent video releases fromyour
database.(array below). We only care about the portion of datawe are getting.

1. Create a function that will loop over the array with the forEach method.
   Return from the function an array of objects. Each object will contain the id
   and name of the specific movie.

2. Create another function that will do the same thing expect now use the map
   method.

---

# 10.2 - forEach & map

1. Write a function called doubleValues which accepts an array and returns a new
   array with all the values in the array passed to the function doubled.

2. Write a function called onlyEvenValues which accepts an array and returns a
   new array with only the even values in the array passed to the function.

3. Write a function called showFirstAndLast which accepts an array as an
   argument and returns a new array with only the first and last elements from
   the function’s argument array. The returned array should only contain
   elements that are strings.

4. Write a function called vowelCount which accepts a string as an argument. The
   function should return an object which has the count of the number of vowel’s
   that are in the string. The key should be the vowel and the value should be
   the count. e.g. {a:3, o:2,u:4}. Should not be case sensitive.

5. Write a function capitalize that takes a string as an argument and will
   return the whole string capitalized.

6. Write a function called shiftLetters that takes a string as an argument and
   return’s an encoded string with each letter shifted down the alphabet by one.

7. Create a function called swapCase that takes a string as an argument and
   returns a string that every other word is capitalized. (you can use the
   fifth’s exercise's function to keep it dry)

---

# 10.3 - forEach & map

We are getting data from an API. We are not getting the data as we want it. We
are going to need to massage the data.

Create separate functions for each questions below:

1. Create a function that returns all the names from the array.

2. Create a function that returns all the objects that are born before 1990.

3. Create a function that returns an object of all the different foods from all
   the objects as the key and the number of times that food is present in all
   the objects as the value. Example: { hamburgers: 3, sausages: 1, salmon: 3,
   pike: 2, steak: 1, lamb: 2, tuna: 2, barracuda: 1, ham: 1, chicken: 1, bird:
   1, rooster: 1, anchovies: 1 }

---

# 11.1 - Libary

Write a JavaScript function that receives the following library object as an
input and displays the books that can be read (the reading status is true). Log
the book name, author name and reading status .

---

# 11.2 - School Method

Take the school object and create the following methods tothat object:

1. A method called “findPerson” that takes two arguments, a type (either a
   student or teacher), and an id.It will return a particular object of that
   person.

2. A method called “assignStudent” that takes two arguments, a student’s id and
   a subject. Assign all of the students to the first available teacher who
   teaches that subject and who is not in full capacity. If all of the teachers
   are in full capacity log to the console “Sorry, no available teachers left”.

3. A method called “assignTeachersSubject” that takes two arguments, the
   teacher’s id, a new subject.Assign the new subject to that particular teacher
   if that subject doesn’t exist in their array of subjects

4. Create a new method of anything you want.
