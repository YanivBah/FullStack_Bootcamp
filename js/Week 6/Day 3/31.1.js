
const getRecipe = async (recipeID) => {
  const res = await setTimeout((ID) => {
    try {
      setTimeout(ID => {
      const recipe = {
        title: "Fresh tomato pasta",
        publisher: "Pinchas Hodadad",
      };
      console.log(`${ID}: ${recipe.title}`);
    },
    1500,
    recipeID
    );
    } catch (e) {
      console.log("It is an error!");
    }
  })
}

const getIDs = async () => {
  try {
    setTimeout(() => {
      const arr = [532, 543, 753, 1, 5];
      console.log(arr);
      return getRecipe(arr[2]);
    }, 1500);
  }
  catch {
    console.log("It is an error!");
  }
}
getIDs();