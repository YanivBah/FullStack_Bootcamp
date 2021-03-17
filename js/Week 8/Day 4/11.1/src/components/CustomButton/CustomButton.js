import React from 'react';
import './custombutton.css';

class CustomButton extends React.Component {
  state = {color: ''};

  onClickButton = (e) => {
    this.props.onClick(e.target.textContent);
  };

  render() {
    const color = this.props.color;
    return (
      <button onClick={this.onClickButton} className={color}>
        {color}
      </button>
    );
  }
}

export default CustomButton;