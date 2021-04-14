const express = require("express");
const { getAllMovies, findMovie, createNewMovie, updateMovie, deleteMovie } = require("./utils");
const app = express();

app.use(express.json());

// Returns all movies
app.get("/api/movies", async (req,res) => {
  const movies = await getAllMovies();
  res.status(200).send(movies);
});

// Returns single movie
app.get("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await findMovie(id);
  res.status(200).json(movie);
});

// Create new movie
app.post("/api/movies", async (req,res) => {
  const newMovie = await createNewMovie(req.body);
  res.status(200).json(newMovie);
});

// Update exist movie
app.put("/api/movies/:id", async (req,res) => {
  const updatedMovie = await updateMovie(req.params.id, req.body);
  res.status(200).json(updatedMovie);
});

// Delete exist movie
app.delete("/api/movies/:id", async (req,res) => {
  const message = await deleteMovie(req.params.id);
  res.status(200).json(message);
})

app.listen(3000, () => console.log('The server is on localhost:3000'));