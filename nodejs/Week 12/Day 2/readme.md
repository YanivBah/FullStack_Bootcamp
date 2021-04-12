# 5.1 - Users.json

Practice makes perfect.

Lets create crud operations to manage users in a json file.

Create a CRUD application and store them in a users.json file that you are able
to do the following operations:

1. Create a user

2. Read a user

3. Update a user

4. Delete a user

**Each user needs at least the following:**

1. ID

2. Name

3. Email

Use this [npm package](https://www.npmjs.com/package/uniqid) to create unique
ids.

When reading, updating or deleting a user, you must only use their id to find
them.

---

# 6.1 - Debugging

We took the code we did in data massaging in JS and broke the code.

Copy the code and use the debugging tool you have learned.

Find the bug and post a screen shot of where it fails from the debugging console
and explain the bug and the fix in your own words.

```
const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: [
      {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    ],
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: [
      {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    ],
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: [
      {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    ],
  },
];

const names = (arr) => {
  return arr.map((el) => {
    return el.name;
  });
};

const born = (arr) => {
  return arr.filter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};

const food = (arr) => {
  const obj = {};

  arr.forEach((el) => {
    el.favoriteFoods.forEach((foodObj) => {
      console.log(foodObj);
      foodObj.forEach((meatItem) => {
        console.log();
        // obj[meatItem] = obj[meatItem] + 1 || 1;
      });
      foodObj.fish.forEach((fishItem) => {
        obj[fishItem] = obj[fishItem] + 1 || 1;
      });
    });
  });
  return obj;
};

console.log(food(data));

```
