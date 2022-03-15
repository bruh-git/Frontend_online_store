import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      cpf: '',
      phone: '',
      email: '',
      address: '',
    };
  }

   handleChange = (event) => {
     const { name, value } = event.target;
     this.setState({
       [name]: value,
     });
   }

   render() {
     const { fullname, cpf, cep, phone, email, address } = this.state;
     //  const {  } = this.props;
     // const generateList = () => .map(()) => (
     //   <div>
     //      <p> nome do produto </p>
     //      <p> preço * quantidade </p>
     //   </div>
     // )

     return (
       <div>
         <div>
           {/* { this.generateList } */}
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
               type="number"
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
               type="tel"
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
               type="number"
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
               type="number"
               value={ address }
               name="address"
               data-testid="checkout-address"
               onChange={ this.handleChange }
             />
           </label>
         </form>

       </div>
     );
   }
}

// Checkout.propTypes = {
//   : PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default Checkout;
