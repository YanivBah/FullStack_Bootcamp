import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box/Box';

class App extends React.Component {
  render() {
    return (
    <div>
      <Box />
    </div>
    );
  }
};

ReactDOM.render(<App/>,document.querySelector('#root'));

