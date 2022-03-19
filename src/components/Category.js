import PropTypes from 'prop-types';
import React from 'react';
import { getCategories } from '../services/api';
import Product from './Product';
import '../css/Category.css';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
      productsCategory: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categoryData: categories,
    });
  }

  getProductCategory = async ({ target }) => {
    const category = target.id;
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${category}`;
    const getProduct = await fetch(url);
    const data = await getProduct.json();
    this.setState({
      productsCategory: data.results,
    });
  };

  createButton = (name, id) => (
    <button
      data-testid="category"
      className="category"
      key={ id }
      name={ name }
      type="button"
      id={ id }
      onClick={ this.getProductCategory }
    >
      {name}
    </button>
  )

  render() {
    const { categoryData, productsCategory } = this.state;
    const { addCart } = this.props;
    return (
      <div className="container">
        <aside>
          <h4>Categorias</h4>
          {categoryData.map((obj) => this.createButton(obj.name, obj.id))}
        </aside>
        <section className="products-category">
          {productsCategory.map((product) => (
            <Product
              info={ product }
              key={ product.id }
              addCart={ (e) => addCart(e, product) }
            />
          ))}
        </section>
      </div>
    );
  }
}

Category.propTypes = {
  addCart: PropTypes.func,
}.isRequired;

export default Category;
