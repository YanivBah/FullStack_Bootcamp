import React from "react";
// import "./custombutton.css";

class Checkbox extends React.Component {
  state = { color: "" };

  onClickButton = (e) => {
    this.props.onClick(e.target.textContent);
  };

  render() {
    const number = this.props.number;
    if (!this.props.checked) {
      return (
        <div>
          <input
            type="checkbox"
            name={`checkbox${number}`}
            id={`checkbox${number}`}
          />
          <label htmlFor={`checkbox${number}`}>{this.props.label}</label>
        </div>
      );
    }
    
    return (
      <div>
        <input
          type="checkbox"
          name={`checkbox${number}`}
          id={`checkbox${number}`}
          defaultChecked
        />
        <label htmlFor={`checkbox${number}`}>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
