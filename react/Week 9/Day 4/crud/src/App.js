import React from "react";
import api from './api/api';
import "./app.css";
import Form from './components/Form/Form';
import WatchedDisplay from './components/WatchedDisplay/WatchedDisplay';

class App extends React.Component {
  state = { data: [], current: null };

  async componentDidMount() {
    const data = await api.get("movies");
    this.setState({ data: data.data });
  }

  handleCurrentState = (name) => {
    if (name === null) {
      this.setState({ current: null });
    } else {
      const current = this.state.data.find((movie) => movie.movieName === name);
      this.setState({ current: current });
    }
  };

  create = (name, image, rating) => {
    const newItem = {
      movieName: name,
      rating: parseInt(rating),
      image: image,
      watchedAt: new Date(),
    };
    const newData = [...this.state.data];
    newData.push(newItem);
    this.setState({ data: newData });
    api.post("movies", newItem);
  };

  update = async (name, image, rating) => {
    const data = await api.get("movies");
    const updatedItem = data.data.find(
      (movie) => movie.movieName === this.state.current.movieName
    );
    updatedItem.movieName = name;
    updatedItem.image = image;
    updatedItem.rating = parseInt(rating);
    this.setState({ data: data.data });
    api.put(`movies/${updatedItem.id}`, updatedItem);
    this.setState({ current: null });
  };

  delete = async (name) => {
    const data = await api.get("movies");
    const index = data.data.findIndex(movie => movie.movieName === name);
    api.delete(`movies/${data.data[index].id}`);
    data.data.splice(parseInt(index), 1);
    this.setState({data: data.data});
    
  };

  render() {
    return (
      <div>
        <h1>Movies and TV Shows Watchlist</h1>
        <Form
          onClick={this.create}
          current={this.state.current}
          cancel={this.handleCurrentState}
          update={this.update}
        />
        <div className="grid">
          {this.state.data.map((watched) => {
            return (
              <WatchedDisplay
                movie={watched}
                edit={this.handleCurrentState}
                delete={this.delete}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default App;
