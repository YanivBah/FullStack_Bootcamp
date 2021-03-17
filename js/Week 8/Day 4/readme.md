# 11.1 - Child to Parent

We have a parent component, that renders three CustomButton components which are
simple buttons. Each time the user presses on one the buttons, the parent should
show which color in the button was selected.

We have an array of colors:

```
const colors = [“blue”,”red”,”yellow”];
```

1. Create a CustomButton component.

2. Loop over the colors array and in every iteration render a CustomButton
   component that will take the color as a prop.

3. When we click on a specific button we need to send that specific color back
   to the parent which will save that color to state and display it to the DOM.

---

# 11.2 - Checkbox

We want to render 4 checkboxes and make 2 of them checked by default.
![Example](https://i.imgur.com/vRotc0d.png)

---

# 11.3 - Form Review

We want to create a survey that will include at least the following inputs:

1. At least two input text tags

2. At least one select tag

3. At least one text area tag

4. All inputs must be controlled

Before the user submits the form they have a chance to review their form before
they submit it.

They have the opportunity to go back to the form and redo the form if they like
to.

Form:

![Example](https://i.imgur.com/JYkhc4w.png)

Review:

![Example](https://i.imgur.com/sEYQfmU.png)

### Unleash the Ninja

- Make only one onChange function to handle all inputs

- Use local storage to persist the form values when clicking the back button
