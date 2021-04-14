const { log } = require('console');
const fs = require('fs').promises;
const uniqid = require('uniqid');

const getAllMovies = async() => {
  try {
    const movies = JSON.parse(await fs.readFile("./database/movies.json","utf-8"));
    return movies;
  } catch(err) {
    return {"error": "Database error"};
  }
} 

const createNewMovie = async(movieDetails) => {
  try {
    const {title = null, rating = null, genre = null, length = null} = movieDetails;
    if (title === null || rating === null || genre === null || length === null) {
      throw new Error("Missing details");
    }
    const newMovie = { title, rating, genre, length, id: uniqid() };
    const movies = await fs.readFile("./database/movies.json","utf-8");
    const newData = JSON.parse(movies);
    newData.push(newMovie);
    fs.writeFile('./database/movies.json', JSON.stringify(newData));
    return newMovie;
  } catch(err) {
    return {"error": err.message};
  }
}

const findMovie = async (id) => {
  try {
    const movies = JSON.parse(await fs.readFile("./database/movies.json","utf-8"));
    const currentMovie = movies.find(movie => movie.id === id);
    return currentMovie;
  } catch(err) {
    return {"error": "database error"};
  }
}

const updateMovie = async (id, newData) => {
  try {
    const {title = null, rating = null, genre = null, length = null} = newData;
    const movies = JSON.parse(await fs.readFile("./database/movies.json","utf-8"));
    const index = movies.findIndex(movie => movie.id === id);
    if (index === -1) throw new Error('Movie ID not found.');
    title ? movies[index].title = title : '';
    rating ? movies[index].rating = rating : '';
    genre ? movies[index].genre = genre : '';
    length ? movies[index].length = length : '';
    await fs.writeFile("./database/movies.json", JSON.stringify(movies));
    return movies[index];
  } catch (err) {
    return { error: err.message };
  }
}

const deleteMovie = async (id) => {
  try {
    const movies = JSON.parse(await fs.readFile("./database/movies.json", "utf-8"));
    const index = movies.findIndex((movie) => movie.id === id);
    if (index === -1) throw new Error("Movie ID not found.");
    movies.splice(index,1);
    await fs.writeFile("./database/movies.json", JSON.stringify(movies));
    return {'message': `Movie with id ${id} removed`};
  } catch (err) {
    return { error: err.message };
  }
}

module.exports = {
  getAllMovies,
  findMovie,
  createNewMovie,
  updateMovie,
  deleteMovie,
};