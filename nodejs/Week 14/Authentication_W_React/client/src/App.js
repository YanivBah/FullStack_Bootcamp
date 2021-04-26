import React, {useState} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./componenets/Login";
import Signup from "./componenets/Signup";
import Home from "./componenets/Home";
import './app.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login userData={{ user, setUser }} />
        </Route>
        <Route path="/signup" exact>
          <Signup userData={{ user, setUser }} />
        </Route>
        <Route path="/home" exact>
          {user ? <Home userData={{ user, setUser }} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
