import React from 'react';
import ReactDOM from 'react-dom';
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";

ReactDOM.render(<Box1 />, document.querySelector("#root"));
ReactDOM.render(<Box2 />, document.querySelector(".box1"));
ReactDOM.render(<Box3 />, document.querySelector(".box2"));
ReactDOM.render([<Box4 />, <Box4 />], document.querySelector(".box3"));