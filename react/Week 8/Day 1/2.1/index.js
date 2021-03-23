import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AppleSeeds React App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {App()}
  </React.StrictMode>,
  document.getElementById('root')
);