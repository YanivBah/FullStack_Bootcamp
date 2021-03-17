import React from "react";
import Checkbox from "./Checkbox/Checkbox";

class App extends React.Component {
  renderCheckboxes = () => {
    const label = ['I read the term of the app',
    'I accept the term of the app',
    'I want to get the weekly news letter',
    'I want to get sales and offers'];
    return label.map((text,index) => {
      return index > 1 ? <Checkbox label={text} checked={true} /> : <Checkbox label={text} />;
    })
  }

  render() {
    return <div>{this.renderCheckboxes()}</div>;
  }
}

export default App;