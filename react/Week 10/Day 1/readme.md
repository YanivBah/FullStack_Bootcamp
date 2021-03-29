# 18.1 - Text

Create a component that takes 2 props. A text as a string and a maximum length
as an integer.

If the text is longer that the maximum length hide the remaining text.

You are able to read the rest of the text by clicking on read more and you are
able to hide the text by clicking on show less.

Use the useState hook to control when it is hidden.

![Example](https://i.imgur.com/9EeTG7l.png)

---

# 18.2 - Simple Todo

Lets create a very basic todo app using useState.

We have the following static data of array of objects:

```
[
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
]
```

Save it to your state.

The user can press an icon to change the todo as completed.

The user can press an icon to change the todo as not completed.

If the todo is completed cross the name out and change the icon to a “check”.If
the todo is not completed change the icon to an “x”.

Use entities to change the icons to a “check” or an “x”.

[Video Example](https://www.youtube.com/watch?v=jcF485U-d_8)

---

# 18.3 - Whats The Time?

Build a page that contains 3 text input fields:

1. few seconds

2. few minutes

3. few hours

Any change in value in one of the inputs should affect the values in the other
boxes, so that the time displayed in all 3 inputs will be adjusted.

For example, when a user writes 60 in the seconds box, 1 must be displayed in
the minutes box and 0.01666 in the hour box.

![Example](https://i.imgur.com/f8Mehz5.png)

---

# 18.4 - Marking and Deleting

You are given this array: `["one", "two", "three", "four", "five"];`

1. Create 5 check boxes in a list.

2. Each check box should have its relevant text from the array.

3. Your check boxes need to be controlled by React.

4. When you check the check boxes you can remove them from your app by clicking
   on a delete button.

5. You are able to reset your check boxes to become unchecked and all the check
   boxes you previously removed need to reappear again.

[Video Example](https://youtu.be/tOlCpakqwUU)
