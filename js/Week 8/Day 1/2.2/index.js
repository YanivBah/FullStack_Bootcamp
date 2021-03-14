import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = ["Hello", "World"];
const number1 = 5;
const number2 = 6;
const string = "I Love React!";
const style = {textAlign: 'center'};

ReactDOM.render(
  <React.StrictMode>
    <h1 style={style}>{data.join(" ")}</h1>
    <p style={style}>
      {number1} + {number2} = {number1 + number2}
    </p>
    <p style={style}>The String's Length is {string.length}</p>
  </React.StrictMode>,
  document.getElementById("root")
);