import React from "react";
import "./app.css";
import "./Paragraph";
import Paragraph from "./Paragraph";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Lorem Ipsum</h1>
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate sequi qui iure at aperiam aut cupiditate. Maiores, magnam dolore nam accusamus esse quod quasi. Aliquid dolor doloribus laudantium hic dolorum consequatur deserunt perferendis, aliquam unde, debitis nisi corporis minima dolorem vel labore temporibus eum, vero quia optio distinctio iure! Ex exercitationem sapiente, odio corrupti, suscipit, est ea quasi obcaecati dolorum quibusdam distinctio debitis excepturi esse quos necessitatibus ut dolore laudantium."
          textLength={170}
        />
      </div>
    );
  }
}

export default App;
