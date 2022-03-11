import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { info, addCart } = this.props;

    return (
      <div data-testid="product" className={ info.id }>
        <p>
          { info.title }
        </p>
        <img src={ info.thumbnail } alt={ info.title } />
        <p>
          { `R$ ${info.price}` }
        </p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ addCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  addCart: PropTypes.func,
}.isRequired;

export default Product;
