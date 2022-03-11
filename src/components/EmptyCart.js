import PropTypes from 'prop-types';
import React, { Component } from 'react';

class EmptyCart extends Component {
  render() {
    const { listCart } = this.props;
    const allItems = listCart.map((item) => item.id);

    const renderItems = listCart.map((item, index) => {
      const someItem = listCart.find((element) => {
        if(element.id === item.id) {
          const filter = allItems.filter((obj) => obj === item.id);
        }
      });
      console.log(someItem);
      const filter = allItems.filter((obj) => obj === item.id);
      return (
        <div key={ index }>
          <p data-testid="shopping-cart-product-name">{item.title}</p>
          <p data-testid="shopping-cart-product-quantity">{filter.length}</p>
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
