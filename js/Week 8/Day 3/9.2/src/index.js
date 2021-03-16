import React from 'react';
import ReactDOM from 'react-dom';
import MusicAlbum from "./MusicAlbum/MusicAlbum";

class App extends React.Component {
  state = {show: true};
  componentDidMount() {
    setTimeout(() => this.setState({show: false}), 5000);
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <MusicAlbum
          img="https://i.imgur.com/cIGb0zi.jpg"
          albumTitle="ועכשיו לחלק האינטרגלקטי"
          artist="טונה"
          length="46m"
          link="https://www.youtube.com/watch?v=Rx_LL_k4JuY"
          topSongName="כנפיים"
        />

        <MusicAlbum
          img="https://i.imgur.com/Hwt4yD4.png"
          albumTitle="One Day Remains"
          artist="Alter Bridge"
          length="55m"
          link="https://www.youtube.com/watch?v=N-I8ALlYxdY"
          topSongName="Metalingus"
        />

        <MusicAlbum
          img="https://i.imgur.com/X5vuVdt.png"
          albumTitle="Swimming"
          link="https://www.youtube.com/watch?v=SsKT0s5J8ko"
          topSongName="Self Care"
        />

        <MusicAlbum />
      </div>
    );
  }
};

ReactDOM.render(<App/>,document.querySelector('#root'));

