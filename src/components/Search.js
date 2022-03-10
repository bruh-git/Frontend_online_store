import React from 'react';
<<<<<<< HEAD
import Product from './Product';
=======
import Category from './Category';
>>>>>>> 601212f467d9109164fa71d13a4c6aa694ffc6f5

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
        {results}
        <Category />
      </div>

    );
  }
}

export default Search;
