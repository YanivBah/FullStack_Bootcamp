import React from "react";
import api from './api/api';
import "./app.css";

class App extends React.Component {

  async componentDidMount() {
    const data = await api.get('movies');
    console.log(data.data);
  }

  render() {
    return (
      <div>
        <h1>Movies and TV Shows Watchlist</h1>
      </div>
    );
  }
}

export default App;
