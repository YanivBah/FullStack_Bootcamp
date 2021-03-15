import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.hidden
      ? this.setState({ hidden: false })
      : this.setState({ hidden: true });
  }

  render() {
    const button = <button onClick={this.handleClick}>Hide/Show</button>;
    if (this.state.hidden) {
      return (
        <div style={{ textAlign: "center" }}>
          {button}
        </div>
      );
    }
    return (
      <div style={{ textAlign: "center" }}>
        {button}
        <div
          style={{ width: "300px", height: "300px", background: "red", margin: "10px auto" }}
        ></div>
      </div>
    );
  }
};

ReactDOM.render(<App/>,document.querySelector('#root'));

