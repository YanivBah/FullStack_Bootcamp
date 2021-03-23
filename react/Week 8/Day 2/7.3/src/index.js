import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, color: "black" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(what) {
    if (what === "increment" && this.state.counter < 10) {
      this.setState({ counter: this.state.counter + 1 }, () => this.whatColor());
    } else if (what === "decrement" && this.state.counter > -10) {
      this.setState({ counter: this.state.counter - 1 }, () => this.whatColor());
    }

  }
  whatColor() {
    if (Math.sign(this.state.counter) === 1) {
      this.setState({ color: "green" });
    } else if (Math.sign(this.state.counter) === -1) {
      this.setState({ color: "red" });
    } else {
      this.setState({ color: "black" });
    }
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1 style={{color: `${this.state.color}`, display: "block"}}>{this.state.counter}</h1>
        <button onClick={() => this.handleClick("increment")}>Increment</button>
        <button onClick={() => this.handleClick("decrement")}>Decrement</button>
      </div>
    );
  }
};

ReactDOM.render(<App/>,document.querySelector('#root'));

