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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
