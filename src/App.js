import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ Search } />
    </BrowserRouter>
  );
}

export default App;
