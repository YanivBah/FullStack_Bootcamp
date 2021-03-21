# 12.1 - Chuck Norris

We want to use [this API](https://api.chucknorris.io/) to get awesome Chuck
Norris jokes.

1. Get a random joke each time you click on a button and display the joke on the
   screen.

2. Display different joke categories on the screen. When the user click’s on a
   specific category, display a joke from that specific category.

### Ninja

1. Dynamically get all the categories from the API and display them on the
   screen.

2. Have a search input that will show a list of jokes depending on the query you
   give it.

---

# 13.1 - Data Massaging

This is our data:

```
const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Johnny",
    birthday: "1-10-1992",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
```

1. Export the data array to the relevant component.

2. Create utility functions that will massage the data.

- Create a function that returns an array of all the names from the object.

- Create a function that returns all the objects that are born before 1990.

  3.Save the modified data to state.

4. Create a Name component that you will pass via props the names and print them
   on the screen.

5. Create a Card component that you will pass via props the objects before 1990
   and print them on the screen.

- which includes their name, birthday, favorite meats and favorite fish foods.

---

# 13.2 - Avatars

We will build random avatars with a help of an API.

We are going to use [this API](https://randomuser.me/) to display random avatars
when the component mounts to the screen.

1. Fetch at least 10 random avatars from the API.

2. Get the relevant data you want from each avatar and save it to state.

3. Display all the avatars on screen.

4. Have an option to filter over the avatars by their name.

We are essentially filtering over an array of objects by the objects name value.

Extra tip: Use the filter and includes method to achieve this.
