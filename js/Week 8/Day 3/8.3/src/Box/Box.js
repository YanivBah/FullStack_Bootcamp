import React from "react";
import "./box.css";

class Box extends React.Component {

  state = {color: "red",circle: false};

  componentDidMount() {
    setInterval(this.colorChange,500)
  }

  colorChange = () => {
    const colors = ["red","blue", "green", "violet", "teal"];
    let index = colors.indexOf(this.state.color);
    if(index === 4) {
      index = -1;
      this.setState({circle: true});
    };
    this.setState({color: colors[index+1]});
  }

  render() {
    return <div className={`box ${this.state.color}${this.state.circle ? ' circle' : ''}`}></div>;
  }
}

export default Box;