import React from "react";
import "./musicalbum.css";

const MusicAlbum = (props) => {
  return (
    <div className="album-container">
      <img src={props.img} alt =""/>
      <div className="info">
        <h2>{props.albumTitle}</h2>
        <span>{props.artist}</span>
      </div>
      <div className="meta">
        <span>Popular Song: <a href={props.link}>{props.topSongName}</a></span>
        <span>Length: {props.length}</span>
      </div>
    </div>
  );
};

MusicAlbum.defaultProps = {
  img: "https://i.imgur.com/X5Hv2St.png",
  albumTitle: "Californication",
  artist: "Red Hot Chilli Peppers",
  length: "56m",
  link: "https://www.youtube.com/watch?v=YlUKcNNmywk",
  topSongName: "Californication"
};

export default MusicAlbum;
