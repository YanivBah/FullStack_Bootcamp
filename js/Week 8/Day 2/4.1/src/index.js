import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";

const App = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Button text="Important" style={{fontWeight: "bold",marginRight: "10px"}}/>
      <Button text="Not Important"/>
    </div>
  );
}

ReactDOM.render(<App/>,document.querySelector('#root'));