import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card/Card";

class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Card
          imgLink="https://source.unsplash.com/weekly?water"
          title="Water"
          paragraph="Just a random paragraph"
          link="# "
          linkText="Share"
          link2="# "
          link2Text="Explore"
        />
        <Card
          imgLink="https://source.unsplash.com/weekly?mountain"
          title="Mountain"
          paragraph="Just a random mountain"
          link="# "
          linkText="Share"
          link2="# "
          link2Text="Explore"
        />
        <Card
          imgLink="https://source.unsplash.com/weekly?snow"
          title="Snow"
          paragraph="Just a random snow"
          link="# "
          linkText="Share"
          link2="# "
          link2Text="Explore"
        />
      </div>
    );
  };
};

ReactDOM.render(<App/>,document.querySelector('#root'));