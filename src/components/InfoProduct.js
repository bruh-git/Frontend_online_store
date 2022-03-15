import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Evaluation from './Evaluation';

class InfoProduct extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  componentDidMount = () => {
    this.fetchProduct()
      .then((response) => this.setState({
        result: response,
      }));
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const result = await fetch(endpoint);
    const data = await result.json();
    return data;
  }

  render() {
    const { result } = this.state;
    const { addCart } = this.props;
    return (
      <div className={ result.id }>
        <h3 data-testid="product-detail-name">
          {result.title}
        </h3>
        <img src={ result.thumbnail } alt={ result.title } />
        <p>
          {result.price}
        </p>
        <Link to="/emptycard" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ addCart }
        >
          Adicionar ao Carrinho
        </button>
        <Evaluation />
      </div>
    );
  }
}

InfoProduct.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  addCart: PropTypes.func.isRequired,
};

export default InfoProduct;
