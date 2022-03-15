import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      cpf: '',
      phone: '',
      email: '',
      address: '',
      total: 0,
    };
  }

  componentDidMount() {
    const { listCart } = this.props;
    let tot = 0;
    listCart.map((item) => {
      tot += tot + (item.price * item.amount);
      return tot;
    });
    this.setState({
      total: tot,
    });
  }

   handleChange = (event) => {
     const { name, value } = event.target;
     this.setState({
       [name]: value,
     });
   }

   render() {
     const { fullname, cpf, cep, phone, email, address, total } = this.state;
     const { listCart } = this.props;
     let valorTotal = 0;

     const render = listCart.map((item, index) => {
       valorTotal += valorTotal + (item.price * item.amount);
       return (
         <div key={ index }>
           <p>{item.title}</p>
           <p>{item.price}</p>
           <p>{item.amount.toString()}</p>
         </div>
       );
     });

     return (
       <div>
         <div>
           {render}

         </div>

         <form>
           <label htmlFor="fullname">
             Nome completo
             <input
               id="fullname"
               value={ fullname }
               type="text"
               name="fullname"
               data-testid="checkout-fullname"
               onChange={ this.handleChange }
             />
           </label>
           <label htmlFor="email">
             E-mail
             <input
               id="email"
               value={ email }
               type="text"
               name="email"
               data-testid="checkout-email"
               onChange={ this.handleChange }
             />
           </label>
           <label htmlFor="cpf">
             CPF
             <input
               id="cpf"
               type="text"
               value={ cpf }
               name="cpf"
               data-testid="checkout-cpf"
               onChange={ this.handleChange }
             />
           </label>
           <label htmlFor="phone">
             Telefone
             <input
               id="phone"
               type="text"
               value={ phone }
               name="phone"
               data-testid="checkout-phone"
               onChange={ this.handleChange }
             />
           </label>
           <label htmlFor="cep">
             CEP
             <input
               id="cep"
               type="text"
               value={ cep }
               name="cep"
               data-testid="checkout-cep"
               onChange={ this.handleChange }
             />
           </label>
           <label htmlFor="address">
             Endereço
             <input
               id="address"
               type="text"
               value={ address }
               name="address"
               data-testid="checkout-address"
               onChange={ this.handleChange }
             />
           </label>
         </form>
         {total}
       </div>
     );
   }
}

Checkout.propTypes = {
  listCart: PropTypes.object,
}.isRequired;

export default Checkout;
