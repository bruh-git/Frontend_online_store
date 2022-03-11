import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import EmptyCart from './components/EmptyCart';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  addProductOnCart = async ({ target: { parentElement: { className } } }) => {
    const url = `https://api.mercadolibre.com/items/${className}`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, data],
    }));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Search
                { ...props }
                addCart={ this.addProductOnCart }
              />) }
          />

          <Route
            path="/emptycard"
            render={ (props) => (
              <EmptyCart
                { ...props }
                listCart={ cartItems }
              />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
