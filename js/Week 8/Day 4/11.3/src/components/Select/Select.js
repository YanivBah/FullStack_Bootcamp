import React from "react";

class Select extends React.Component {
  renderOptions = () => {
    const options = this.props.options;
    return options.map(option => {
      return (
        <option value={option.toLowerCase()}>{option}</option>
      );
    })
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.text}:</label>
        <select
          name={this.props.id}
          id={this.props.id}
          onChange={this.props.onChange}
          value={this.props.value.toLowerCase()}
        >
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

export default Select;