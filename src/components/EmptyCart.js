import PropTypes from 'prop-types';
import React, { Component } from 'react';

class EmptyCart extends Component {
  addAmount = (acc, item) => {
    return acc.map((itemCart) => {
      if (itemCart.id === item.id) {
        const { id, title, amount } = itemCart;
        const newAmount = amount + 1;
        return {
          id, title, amount: newAmount,
        };
      }

      return itemCart;
    }, []);
  }

  assembleCart = (listCart) => {
    return listCart.reduce((acc, item) => {
      if (acc.some((itemCart) => item.id === itemCart.id)) {
        return this.addAmount(acc, item);
      }
      const { id, title } = item;
      return [
        ...acc,
        { id, title, amount: 1 },
      ];
    }, []);
  }

  render() {
    const { listCart } = this.props;

    const cart = this.assembleCart(listCart);

    const renderItems = cart.map((item, index) => {
      return (
        <div key={ index }>
          <p data-testid="shopping-cart-product-name">{item.title}</p>
          <p data-testid="shopping-cart-product-quantity">{item.amount}</p>
          <span>-</span>
          <span>+</span>
        </div>
      );
    });

    return (
      <div>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        {renderItems}
      </div>
    );
  }
}

EmptyCart.propTypes = {
  listCart: PropTypes.array,
}.isRequired;

export default EmptyCart;
