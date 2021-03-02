# 31.1 - ASync / Await

Lets change the code below to use async await instead of .then and .catch

We are faking an API request to a food recipe database. Here we are requesting
for food recipe Ids. We get an array of Ids once consumed.

```sh
const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
});
```

Here we are fetching a recipe with a given Id. We are getting a recipe as an
object once consumed.

```sh
const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};
```

Here we are consuming the promise. Getting the Ids, then getting a recipe with
the id in the index 2.

```sh
getIDs()
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((error) => {
    console.log("It is an error!");
  });
```

Your task is to convert the consumed promise not to use .then and .catch but to
use the modern way using async and await.

---

# 34.1 - Star Wars

We are going to use [this star wars api](https://pages.github.com/) to get
information. We want to get information of 10 characters. We want the following
information:

1. Name
2. Height
3. Hair Color
4. Planet they came from
5. Planet population

We want you to create an array of objects that will store all of this
information. Create the object structure like this:

- Note: The value of the key Planet is an object.

We want to place it dynamically into the DOM without using any HTML. Create a
table using pure JavaScript and place the information there.
