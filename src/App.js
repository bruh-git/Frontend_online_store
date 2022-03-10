import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import EmptyCart from './components/EmptyCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route path="/emptycard" component={ EmptyCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
