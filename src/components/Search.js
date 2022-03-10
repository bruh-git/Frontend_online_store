import React from 'react';
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
        </div>
        <Category />
      </div>

    );
  }
}

export default Search;
