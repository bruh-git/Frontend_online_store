import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import EmptyCart from './components/EmptyCart';
import InfoProduct from './components/InfoProduct';
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

          <Route path="/product/:id" render={ (props) => <InfoProduct { ...props } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
