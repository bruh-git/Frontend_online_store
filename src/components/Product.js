import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { info } = this.props;
    console.log(info);
    return (
      <div data-testid="product">
        <p>
          { info.title }
        </p>
        <img src={ info.thumbnail } alt={ info.title } />
        <p>
          { `R$ ${info.price}` }
        </p>
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
};

export default Product;
