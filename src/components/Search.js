import PropTypes from 'prop-types';
import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../css/Search.css';
import Logo from '../images/logo.svg';
import Category from './Category';
import Product from './Product';

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

    this.setState({
      products: data.results,
    });
  }

  render() {
    const { search, products } = this.state;
    const { addCart, cartItems } = this.props;
    const results = products.map((product) => (
      <Product info={ product } key={ product.id } addCart={ addCart } />
    ));
    return (
      <div className="flex-container">
        <header className="form-container">
          <div className="div-logo">
            <img src={ Logo } alt="Logo" className="icon-logo" />
            <div className="container-text-logo">
              <span className="text-logo">FrontEnd</span>
              <span className="text2-logo">Online Store</span>
            </div>
          </div>

          <div className="formAndCart">
            <form className="form">
              <input
                type="text"
                name="search"
                value={ search }
                onChange={ this.handleChange }
                data-testid="query-input"
                className="query-input"
                placeholder="Buscar produtos, marcas e muito mais..."
              />
              <IoIosSearch
                className="icon-search"
                onClick={ this.handleClick }
                data-testid="query-button"
              />
            </form>
            <p data-testid="home-initial-message" className="initial-msg">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
          <Link to="/emptycard" data-testid="shopping-cart-button" className="link-cart">
            <BsCart3 className="cart-icon" />
            <span data-testid="shopping-cart-size" className="cart-length">
              <p className="cart-p">{cartItems.length}</p>
            </span>
          </Link>
        </header>

        <main className="main-container">
          <Category addCart={ addCart } />
          {results}
        </main>
      </div>

    );
  }
}

Search.propTypes = {
  addCart: PropTypes.func,
}.isRequired;

export default Search;
