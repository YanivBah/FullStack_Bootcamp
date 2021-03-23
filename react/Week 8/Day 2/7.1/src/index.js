import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const currentNumber = this.state.number;
    this.setState({ number: currentNumber + 1 });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            padding: "15px 21px",
            background: "yellow",
            display: "inline-block",
            borderRadius: "50%",
            border: "1px solid black",
          }}
        >
          {this.state.number}
        </p>
        <br />
        <button onClick={this.handleClick}>Increment!</button>
      </div>
    );
  }
};

ReactDOM.render(<App/>,document.querySelector('#root'));

