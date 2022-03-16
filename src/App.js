import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
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

  addProductOnCart = async ({ target: { parentElement: { className } } }, remove) => {
    const { cartItems } = this.state;
    if (remove) {
      let found = false;
      const data = cartItems.reverse().reduce((acc, item) => {
        if (item.id === className && !found) {
          found = true;
          return acc;
        }

        return [...acc, item];
      }, []);
      this.setState({
        cartItems: data.reverse(),
      });
    } else {
      const url = `https://api.mercadolibre.com/items/${className}`;
      const response = await fetch(url);
      const data = await response.json();

      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, data],
      }));
    }
  }

  addAmount = (acc, item) => (
    acc.map((itemCart) => {
      if (itemCart.id === item.id) {
        const { id, title, amount, price } = itemCart;
        const newAmount = amount + 1;
        return {
          id, title, amount: newAmount, price,
        };
      }

      return itemCart;
    }));

  assembleCart = (listCart) => listCart.reduce((acc, item) => {
    if (acc.some((itemCart) => item.id === itemCart.id)) {
      return this.addAmount(acc, item);
    }
    const { id, title, price } = item;
    return [
      ...acc,
      { id, title, amount: 1, price },
    ];
  }, [])

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
                cartItems={ cartItems }
              />) }
          />

          <Route
            path="/emptycard"
            render={ (props) => (
              <EmptyCart
                { ...props }
                listCart={ cartItems }
                addCart={ this.addProductOnCart }
                assembleCart={ this.assembleCart }
              />) }
          />

          <Route
            path="/product/:id"
            render={ (props) => (<InfoProduct
              { ...props }
              addCart={ this.addProductOnCart }
              cartItems={ cartItems }
            />) }
          />

          <Route
            path="/checkout"
            render={ (props) => (<Checkout
              { ...props }
              listCart={ this.assembleCart(cartItems) }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
