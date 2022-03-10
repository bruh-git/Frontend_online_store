import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

class Search extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label htmlFor="search">
              <input
                type="text"
                name="search"
              />
            </label>
          </form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/emptycard" data-testid="shopping-cart-button">
            Carrinho de compras
          </Link>
        </div>
        <Category />
      </div>

    );
  }
}

export default Search;
