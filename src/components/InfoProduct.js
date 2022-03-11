import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div>
        <h3 data-testid="product-detail-name">
          {result.title}
        </h3>
        <img src={ result.thumbnail } alt={ result.title } />
        <p>
          {result.price}
        </p>
      </div>
    );
  }
}

InfoProduct.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default InfoProduct;
