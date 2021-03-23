import React from "react";

class Header extends React.Component {
  state = {favoriteColor: 'red', text: ''};

  componentDidMount() {
    setTimeout(() => this.setState({favoriteColor: 'blue'}),1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      this.setState({ text: `The updated favorite color is ${this.state.favoriteColor}` });
    }
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default Header;