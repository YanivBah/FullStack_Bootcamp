import React from "react";
import axios from "axios";
import Card from "./Card";
import "./app.css";

class App extends React.Component {
  state = { users: [], filtered:[] };
  fetchData = async () => {
    const baseUrl = `https://randomuser.me/api/?results=20`;
    const response = await axios.get(baseUrl, {});
    this.setState({users: response.data.results});
  };

  createCard = (users = this.state.users) => {
      return users.map(user => {
        return (<Card user={user}/>)
      });
  }

  filterByName = (e) => {
    const term = e.target.value;
    const filteredArr = this.state.users.filter(user => {
      const name = `${user.name.first} ${user.name.last}`;
      if (name.toLowerCase().startsWith(term.toLowerCase())) {
        return user;
      } return false;
    })
    this.setState({filtered: filteredArr});
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <div className="search">
          <input
            onChange={this.filterByName}
            type="text"
            name="search1"
            id="search1"
            placeholder="Search Name Here"
          />
        </div>
        <div className="grid">
          {this.state.filtered.length > 0
            ? this.createCard(this.state.filtered)
            : this.createCard()}
        </div>
      </div>
    );
  }
}

export default App;