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
        <Form onClick={this.create}/>
        <div className="grid">
        {this.state.data.map(watched => {
         return <WatchedDisplay movie={watched} />        })}
        </div>
      </div>
    );
  };
};

export default App;
