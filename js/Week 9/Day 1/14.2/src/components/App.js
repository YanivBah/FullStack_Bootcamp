import React from "react";
import "./app.css";

class App extends React.Component {
  constructor() {
    super()
    this.textareaRef = React.createRef();
  }
  
  copy = () => {
    this.textareaRef.current.select();
    document.execCommand("copy");
  }

  render() {
    return (
      <div>
        <textarea ref={this.textareaRef} name="" id="" cols="30" rows="10"></textarea>
        <button onClick={this.copy}>Copy</button>
      </div>
    );
  }
}

export default App;