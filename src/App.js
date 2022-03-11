import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import EmptyCart from './components/EmptyCart';
import InfoProduct from './components/InfoProduct';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route path="/emptycard" component={ EmptyCart } />
        <Route path="/product/:id" render={ (props) => <InfoProduct { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
