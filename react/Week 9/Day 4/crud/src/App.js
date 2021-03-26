import React from "react";
import api from './api/api';
import "./app.css";
import Form from './components/Form/Form';
import WatchedDisplay from './components/WatchedDisplay/WatchedDisplay';

class App extends React.Component {

  state = {data: [], current: null};

  async componentDidMount() {
    const data = await api.get('movies');
    this.setState({data: data.data});
  };

  handleCurrentState = (name) => {
    if (name === null) {
      this.setState({ current: null });
    } else {
      const current = this.state.data.find(movie => movie.movieName === name);
      this.setState({current: current});
    }
  }

  create = (name, image, rating) => {
    const newItem = {
      movieName: name,
      rating: parseInt(rating),
      image: image,
      watchedAt: new Date(),
    };
    const newData = [...this.state.data];
    newData.push(newItem);
    this.setState({data: newData});
    api.post('movies', newItem);
  }

  update = () => {

  }

  delete = () => {

  }

  render() {
    return (
      <div>
        <h1>Movies and TV Shows Watchlist</h1>
        <Form
          onClick={this.create}
          current={this.state.current}
          cancel={this.handleCurrentState}
        />
        <div className="grid">
          {this.state.data.map((watched) => {
            return (
              <WatchedDisplay movie={watched} edit={this.handleCurrentState} />
            );
          })}
        </div>
      </div>
    );
  };
};

export default App;
