import PropTypes from 'prop-types';
import React, { Component } from 'react';

class EmptyCart extends Component {
  addAmount = (acc, item) => (
    acc.map((itemCart) => {
      if (itemCart.id === item.id) {
        const { id, title, amount } = itemCart;
        const newAmount = amount + 1;
        return {
          id, title, amount: newAmount,
        };
      }

      return itemCart;
    }));

  assembleCart = (listCart) => listCart.reduce((acc, item) => {
    if (acc.some((itemCart) => item.id === itemCart.id)) {
      return this.addAmount(acc, item);
    }
    const { id, title } = item;
    return [
      ...acc,
      { id, title, amount: 1 },
    ];
  }, [])

  render() {
    const { listCart, addCart } = this.props;
    const cart = this.assembleCart(listCart);

    const renderItems = cart.map((item, index) => {
      console.log(item.title);
      return (
        <div key={ index } className={ item.id }>
          <p data-testid="shopping-cart-product-name">{item.title}</p>
          <button
            type="button"
            onClick={ (event) => addCart(event, true) }
            className={ item.id }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{item.amount.toString()}</span>
          <button
            type="button"
            onClick={ addCart }
            className={ item.id }
            data-testid="product-increase-quantity"
          >
            +
          </button>
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
