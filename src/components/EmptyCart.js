import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmptyCart extends Component {
  render() {
    const { listCart, addCart, assembleCart } = this.props;
    const cart = assembleCart(listCart);

    const renderItems = cart.map((item, index) => (
      <div key={ index } className={ item.id }>
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <p>{item.price}</p>
        <button
          type="button"
          onClick={ (event) => addCart(event, item, true) }
          className={ item.id }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{item.amount.toString()}</span>
        <button
          type="button"
          onClick={ (event) => addCart(event, item) }
          className={ item.id }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    ));

    return (
      <div>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        {renderItems}
        <Link to="/checkout" data-testid="checkout-products">
          Finalizar Comprar
        </Link>
      </div>
    );
  }
}

EmptyCart.propTypes = {
  listCart: PropTypes.array,
}.isRequired;

export default EmptyCart;
