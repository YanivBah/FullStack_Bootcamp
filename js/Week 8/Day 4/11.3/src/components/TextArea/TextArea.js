import React from "react";

class TextArea extends React.Component {
  render() {
    const id = this.props.id;
    return (
      <div>
        <label htmlFor={id}>{this.props.text}:</label>
        <textarea
          name={id}
          id={id}
          cols="30"
          rows="5"
          onChange={this.props.onChange}
          value={this.props.value}
        ></textarea>
      </div>
    );
  }
}

export default TextArea;