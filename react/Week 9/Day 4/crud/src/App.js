import React from "react";
import api from './api/api';
import "./app.css";
import Form from './components/Form/Form';
import WatchedDisplay from './components/WatchedDisplay/WatchedDisplay';

class App extends React.Component {

  state = {data: []};

  async componentDidMount() {
    const data = await api.get('movies');
    this.setState({data: data.data});
  };

  create = (name, image, rating) => {
    const newItem = {
      movieName: name,
      rating: parseInt(rating),
      image: image
    };
    api.post('movies', newItem);
  }

  update = () => {

  }

  delete = () => {

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Movies and TV Shows Watchlist</h1>
        <Form onClick={this.create}/>
        {this.state.data.map(watched => {
         return <WatchedDisplay movie={watched} /> 
        })}
      </div>
    );
  };
};

export default App;
