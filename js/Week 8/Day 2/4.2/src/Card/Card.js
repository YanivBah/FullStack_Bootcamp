import React from "react";
import './card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgLink} alt="just a random img"/>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <a href={props.link}>{props.linkText}</a>
      <a href={props.link2}>{props.link2Text}</a>
    </div>
  );
};

export default Card;
