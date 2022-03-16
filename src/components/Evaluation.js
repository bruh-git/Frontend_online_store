import React, { Component } from 'react';
import { FaRegStar } from 'react-icons/fa';

class Evaluation extends Component {
  constructor() {
    super();
    const number3 = 3;
    const number4 = 4;
    const number5 = 5;
    this.state = {
      email: '',
      message: '',
      star: [1, 2, number3, number4, number5],
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

  handleClick = (event) => {
    event.preventDefault();
    const { email, message, clicked } = this.state;
    let evaluation = JSON.parse(localStorage.getItem('evaluations') || '[]');

    const newEvalution = {
      evaluation: {
        email,
        message,
        clicked,
      },
    };

    evaluation = [...evaluation, newEvalution];
    localStorage.setItem('evaluations', JSON.stringify(evaluation));
    const number3 = 3;
    const number4 = 4;
    const number5 = 5;
    this.setState({
      email: '',
      message: '',
      star: [1, 2, number3, number4, number5],
      clicked: '',
    });
  }

  render() {
    const { message, email, star } = this.state;
    const storage = JSON.parse(localStorage.getItem('evaluations'));
    let evoluations = <p>Ola</p>;
    if (storage !== null) {
      evoluations = storage.map((storages, index) => (
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
    }

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
            onClick={ this.handleClick }
            data-testid="submit-review-btn"
          >
            Avaliar
          </button>
        </form>
        { evoluations }
      </div>
    );
  }
}

export default Evaluation;
