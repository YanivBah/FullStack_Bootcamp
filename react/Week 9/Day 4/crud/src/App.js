import axios from "axios";
import React from "react";
import api from './api/api';
import "./app.css";
import Form from './components/Form/Form';

class App extends React.Component {

  state = {data: []};

  async componentDidMount() {
    const data = await api.get('movies');
    this.setState({data: data.data});
  };

  create = (name, image, rating) => {
    const newItem = {
      watchedAt: new Date(),
      movieName: name,
      rating: parseInt(rating),
      image: image
    };
    api.post('movies');
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
        <Form/>
      </div>
    );
  };
};

export default App;
