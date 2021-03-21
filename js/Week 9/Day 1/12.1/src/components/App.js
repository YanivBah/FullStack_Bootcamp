import React from "react";
import axios from "axios";
import "./app.css";

class App extends React.Component {
  state = { categories: [] };

  fetchData = async (what) => {
    const baseUrl = `https://api.chucknorris.io/jokes/${what}`;
    const response = await axios.get(baseUrl, {});
    return response.data;
  };

  updateCategories = async () => {
    const categories = await this.fetchData("categories");
    this.setState({ categories: categories, joke: "" });
  };

  showCategories = () => {
    return this.state.categories.map((cat) => {
      const current = cat.split("");
      current[0] = current[0].toUpperCase();
      return (
        <button onClick={() => this.showJoke(current.join("").toLowerCase())}>
          {current.join("")}
        </button>
      );
    });
  };

  showJoke = async (category) => {
    const joke = await this.fetchData(`random?category=${category}`);
    this.setState({ joke: joke.value });
  };

  componentDidMount() {
    this.updateCategories();
  }

  search = async (e) => {
    const term = e.target.previousElementSibling.value;
    const joke = await this.fetchData(`search?query=${term}`);
    const random = Math.floor(Math.random() * (joke.total-1));
    this.setState({joke: joke.result[random].value});
  }

  render() {
    return (
      <div>
        <input type="text" name="text" id="text" />
        <button className="search" onClick={this.search}>Search</button>
        <br/>
        {this.showCategories()}
        <h5>{this.state.joke}</h5>
      </div>
    );
  }
}

export default App;