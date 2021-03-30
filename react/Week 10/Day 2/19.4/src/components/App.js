import React, {useState, useEffect} from "react";
import axios from "axios";
import "./app.css";


const App = () => {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');

  const fetchData = async (what) => {
    const baseUrl = `https://api.chucknorris.io/jokes/${what}`;
    const response = await axios.get(baseUrl, {});
    return response.data;
  }

  const updateCategories = async () => {
    const newCategories = await fetchData("categories");
    setCategories(newCategories);
  };

  const showCategories = () => {
    return categories.map((cat, index) => {
      const current = cat.split("");
      current[0] = current[0].toUpperCase();
      return (
        <button key={`cat${index}`} onClick={() => showJoke(current.join("").toLowerCase())}>
          {current.join("")}
        </button>
      );
    });
  }

  const showJoke = async (category) => {
    const newJoke = await fetchData(`random?category=${category}`);
    setJoke(newJoke.value);
  }

  useEffect(() => {
    updateCategories();
  },[]);

  const search = async (term) => {
    const newJoke = await fetchData(`search?query=${term}`);
    const random = Math.floor(Math.random() * (newJoke.total - 1));
    setJoke(newJoke.result[random].value);
  }

  const inputRef = React.createRef();
  return (
    <div>
      <input ref={inputRef} type="text" name="text" id="text" />
      <button className="search" onClick={() => search(inputRef.current.value)}>Search</button>
      <br/>
      {showCategories()}
       <h5>{joke}</h5>
    </div>
  );
}

export default App;