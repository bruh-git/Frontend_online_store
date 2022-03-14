import React, { Component } from 'react';
import { FaRegStar } from 'react-icons/fa';

class Evaluation extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      star: [1, 2, 3, 4, 5],
      clicked: '',
    };
  }

   handleStarClick = (event, obj) => {
     this.setState({
       clicked: obj,
     });
   };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { email, message, clicked } = this.state;
    let evaluation = JSON.parse(localStorage.getItem('evaluations') || '[]');
    // avaliacoes vai retornar um array de objeto contendo objetos com o que foi digitado ou será um array vazio. Esse retornar converterá o texto em objeto.

    const newEvalution = {
      evaluation: {
        email,
        message,
        clicked,
      },
    };

    evaluation = [...evaluation, newEvalution];
    localStorage.setItem('evaluations', JSON.stringify(evaluation));
  }

  render() {
    const { message, email, star } = this.state;
    const storage = JSON.parse(localStorage.getItem('evaluations'));
    console.log(storage);
    const evoluations = storage.map((storages, index) => (
      <div key={ index }>
        <h4>
          {storages.evaluation.email}
        </h4>
        <p>
          {storages.evaluation.message}
        </p>
        <p>
          {storages.evaluation.clicked}
        </p>
      </div>
    ));
    console.log(typeof storage);
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="product-detail-email"
            />
          </label>

          <div>
            {star.map((obj) => (
              <FaRegStar
                key={ obj }
                data-testid={ `${obj}-rating ` }
                onClick={ (e) => this.handleStarClick(e, obj) }
              />
            ))}

            {/* {<FaRegStar />}
            {<FaStar />} */}
          </div>

          <label htmlFor="message">
            <textarea
              id="message"
              name="message"
              value={ message }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
          </label>
          <button
            type="submit"
            // disabled={ disabled }
            onClick={ this.handleClick }
            data-testid="submit-review-btn"
          >
            Avaliar
          </button>
        </form>
        {(storage !== null && evoluations) }
      </div>
    );
  }
}

export default Evaluation;
