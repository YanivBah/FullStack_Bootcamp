# 8.1 - Life Cycle Methods

1. Create an initial state in a component with a key called “favoriteColor” and
   its value some color string.

2. In your JSX create an h1 element that will display your favorite color coming
   from state. e.g. “My favorite color is blue”

3. In your JSX create an empty div with an id attribute.

4. Just when the component mounts to the screen call the appropriate life cycle
   method that will create a setTimeout function that will be invoked after 1
   second. Inside your setTimeout function change the state’s value of your
   favoriteColor to some other color.

5. Call the life cycle method that will be invoked when the state changes in
   your component.Inside this life cycle method select the empty DOM element and
   insert the text “The updated favorite color is” and attach the new value you
   get from state.

---

# 8.2 - Box Animation

1. We want to create a simple app: a box that slides into the screen 1 sec after
   the page loads, and then disappears from the DOM after 4 seconds.

2. We also want to be able to add 3 such boxes with different sizes.

---

# 8.3 - Changing Box

1. We want to create a simple app: a box that changes color every half a second.

2. Let’s change the box to a circle after 5 color changes.

---

# 9.1 - Spinner

1. Create a Spinner Component.

2. In the App Component, create a timer when the component mounts to the screen.

3. When the timer is still active display a spinner to the screen.

4. When the timer is finished remove the spinner from the screen.

Extra: Create 3 different spinners and randomly select one of them when the
program starts.
