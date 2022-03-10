import React from 'react';
import { getCategories } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categoryData: categories,
    });
  }

  createButton = (name, id) => (
    <button
      data-testid="category"
      className="category"
      key={ id }
      name={ name }
      type="button"
      id={ id }
    >
      {name}
    </button>
  )

  render() {
    const { categoryData } = this.state;
    return (
      <aside>
        <h4>Categorias</h4>
        {categoryData.map((obj) => this.createButton(obj.name, obj.id))}
      </aside>
    );
  }
}

export default Category;
