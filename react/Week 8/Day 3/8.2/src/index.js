import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box/Box';

class App extends React.Component {
  render() {
    return (
    <div>
      <Box class="box1"/>
      <Box class="box2"/>
      <Box class="box3"/>
    </div>
    );
  }
};

ReactDOM.render(<App/>,document.querySelector('#root'));

