import React from "react";
import "./app.css";
import Time from "./Time";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>What is the time?</h1>
        <Time/>
      </div>
    );
  }
}

export default App;
