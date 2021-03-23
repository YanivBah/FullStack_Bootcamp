import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner/Spinner';

class App extends React.Component {
  state = {show: true};
  componentDidMount() {
    setTimeout(() => this.setState({show: false}), 5000);
  }

  showSpinner = () => {
    if (this.state.show) {
      return <Spinner />
    }
    return null
  }

  render() {
    return <div>{this.showSpinner()}</div>;
  }
};

ReactDOM.render(<App/>,document.querySelector('#root'));

