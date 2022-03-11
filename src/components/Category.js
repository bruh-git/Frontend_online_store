import React from 'react';
import { getCategories } from '../services/api';

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
    return (
      <div>
        <aside>
          <h4>Categorias</h4>
          {categoryData.map((obj) => this.createButton(obj.name, obj.id))}
        </aside>
        <section>
          {productsCategory.map((product) => (
            <div key={ product.id }>
              <img src={ product.thumbnail } alt={ product.title } />
              <p data-testid="product">{product.title}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Category;
