import React from "react";
import './watcheddisplay.css';

class WatchedDisplay extends React.Component {
    constructor(props) {
    super(props);
    this.nameRef = React.createRef();
  }

  render() {
    const date = new Date(this.props.movie.watchedAt);
    const {movieName, rating, image} = this.props.movie;
    return (
      <div className="card">
        <h4 ref={this.nameRef}>{movieName}</h4>
        <img src={image} alt={movieName + "poster"} />
        <p>Watched at: {date.toLocaleDateString("en-UK")}</p>
        <span className="rating">{"⭐".repeat(parseInt(rating))}</span>
        <div className="row">
          <button
            onClick={() => {
              this.props.edit(this.nameRef.current.textContent);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.props.delete(this.nameRef.current.textContent);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default WatchedDisplay;