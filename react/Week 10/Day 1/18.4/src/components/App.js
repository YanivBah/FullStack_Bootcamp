import React from "react";
import "./app.css";
import Checkbox from "./Checkbox";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Marking and Deleting</h1>
        <Checkbox data={["one", "two", "three", "four", "five"]} />
      </div>
    );
  }
}

export default App;
