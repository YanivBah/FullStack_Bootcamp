import React, {useState, useEffect} from "react";
import axios from "axios";
import "./app.css";

const App = () => {
  
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    console.log(`Hey`);
    const fetching = async () => {
      const {data} = await axios.get("https://swapi.dev/api/films/1/");
      setMovie(data);
    }
    fetching();
  },[]);

  const isMovieEmpty = Object.keys(movie).length === 0 && movie.constructor === Object;
  return (
    <div>
      {!isMovieEmpty ? <h1>{movie.title}</h1> : ""}
      {!isMovieEmpty ? <h4>Director: {movie.director}</h4> : ""}
    </div>
    // <div>Hello</div>
  );
}
export default App;
