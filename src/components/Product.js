import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { info } = this.props;

    return (
      <Link to={ `/product/${info.id}` } data-testid="product-detail-link">
        <div data-testid="product" className={ info.id }>
          <p>
            {info.title}
          </p>
          <img src={ info.thumbnail } alt={ info.title } />
          <p>
            {`R$ ${info.price}`}
          </p>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={ addCart }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </Link>
    );
  }
}

Product.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  addCart: PropTypes.func,
}.isRequired;

export default Product;
