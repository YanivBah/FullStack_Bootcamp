import React from "react";
import CustomButton from "./CustomButton/CustomButton";

class App extends React.Component {
  state = {color: ''};

  onClickButton = (color) => {
    this.setState({color: color});
  }

  renderButtons = () => {
    const colors = ["blue", "red", "yellow"];
    return colors.map(color => {
      return <CustomButton onClick={this.onClickButton} color={color} />;
    })
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
        <h1>The color selected is: {this.state.color}</h1>
      </div>
    );
  }
}

export default App;