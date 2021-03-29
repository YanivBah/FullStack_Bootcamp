import React from "react";
import "./app.css";
import ToDoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple ToDo List</h1>
        <ToDoList/>
      </div>
    );
  }
}

export default App;
