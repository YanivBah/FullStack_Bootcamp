import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Products from './Products';
import ProductDetail from './ProductDetail';
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;