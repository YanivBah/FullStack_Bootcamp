import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.text}:</label>
        <input
          type="text"
          name={this.props.id}
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
