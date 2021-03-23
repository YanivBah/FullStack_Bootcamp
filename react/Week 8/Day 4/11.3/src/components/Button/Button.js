import React from "react";

class Button extends React.Component {
  onClick = (e,boolean) => {
    this.props.onClick(boolean);
    if (this.props.onClick2) {
      this.props.onClick2();
    }
  };

  render() {
    return <button onClick={(e) => this.onClick(e,this.props.review)}>{this.props.text}</button>;
  }
}

export default Button;
