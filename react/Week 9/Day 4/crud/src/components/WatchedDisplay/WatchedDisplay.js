import React from "react";
class WatchedDisplay extends React.Component {
  render() {
    const date = new Date(this.props.movie.WatchedAt);
    console.log(date);
    const {movieName, rating, image} = this.props.movie;
    return <div>{movieName}</div>
  }
}

export default WatchedDisplay;