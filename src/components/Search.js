import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import Category from './Category';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      products: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { search } = this.state;

    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    this.setState({
      products: data.results,
    });
  }

  render() {
    const { search, products } = this.state;
    const results = products.map((product) => (
      <Product info={ product } key={ product.id } />
    ));
    return (
      <div>
        <div>
          <form>
            <label htmlFor="search">
              <input
                type="text"
                name="search"
                value={ search }
                onChange={ this.handleChange }
                data-testid="query-input"
              />
            </label>
            <button
              type="submit"
              onClick={ this.handleClick }
              data-testid="query-button"
            >
              Pesquisar
            </button>
          </form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/emptycard" data-testid="shopping-cart-button">
            Carrinho de compras
          </Link>
          {results}
        </div>
        <Category />
      </div>

    );
  }
}

export default Search;
