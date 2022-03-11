import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { info } = this.props;

    return (
      <Link to={ `/product/${info.id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <p>
            { info.title }
          </p>
          <img src={ info.thumbnail } alt={ info.title } />
          <p>
            { `R$ ${info.price}` }
          </p>
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
};

export default Product;
