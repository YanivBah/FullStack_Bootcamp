import React from "react";
import data from "./data";
import Name from "./Name";
import Card from "./Card";
import "./app.css";

class App extends React.Component {
  state = {names: [], before1990: []};

  dataMassaging = (what) => {
    switch (what) {
      case 'names':
        return data.map(person => person.name);

      case 'before1990':
        return data.filter((person) => {
          const year = parseInt(person.birthday.split("-")[2]);
          if (year < 1990) {
            return person;
          }
        });

      default:
        return [];
    }
  }

  componentDidMount() {
    this.setState({
      names: this.dataMassaging("names"),
      before1990: this.dataMassaging("before1990"),
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <ul>
          <Name names={this.state.names} />
        </ul>
        <Card people={this.state.before1990} />
      </div>
    );
  }
}

export default App;