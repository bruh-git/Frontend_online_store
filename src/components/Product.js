import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Product.css';

class Product extends React.Component {
  render() {
    const { info, addCart } = this.props;
    const freeShipping = info.shipping.free_shipping;

    return (
      <div className="product">
        <Link
          to={ `/product/${info.id}` }
          data-testid="product-detail-link"
          className="link-product"
        >
          <div data-testid="product" className="div-product">

            <img src={ info.thumbnail } alt={ info.title } className="img-product" />
            <div className="info-product">
              <p className="price-product">
                {`R$ ${info.price}`}
              </p>
              <p className="title-product">
                {info.title}
              </p>
              {(freeShipping
            && <p data-testid="free-shipping" className="frete">Frete Grátis</p>)}

            </div>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ (event) => addCart(event, info) }
          id={ info.id }
          className="add-cart-btn"
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
    id: PropTypes.string,
  }).isRequired,
  addCart: PropTypes.func,
}.isRequired;

export default Product;
