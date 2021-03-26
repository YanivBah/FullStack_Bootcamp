import React from "react";
import './watcheddisplay.css';

class WatchedDisplay extends React.Component {
  render() {
    const date = new Date(this.props.movie.watchedAt);
    const {movieName, rating, image} = this.props.movie;
    return (
      <div className="card">
        <h4>{movieName}</h4>
        <img src={image} alt={movieName + "poster"} />
        <p>Watched at: {date.toLocaleDateString("en-UK")}</p>
        <span className="rating">{"⭐".repeat(parseInt(rating))}</span>
        <div className="row">
        <button>Edit</button>
        <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default WatchedDisplay;