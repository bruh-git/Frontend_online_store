import React, { Component } from 'react';

class EmptyCart extends Component {
  render() {
    const { listCart } = this.props;
    const quantity = listCart.map((item) => item.id);
    const renderItems = listCart.map((item, index) => (
      <div key={ index }>
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <p data-testid="shopping-cart-product-quantity">{item.price}</p>

      </div>
    ));

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

export default EmptyCart;
