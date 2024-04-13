import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Route } from 'react-router-dom';
import OrderForm from './pages/OrderForm'; 
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
      <HomePage />
      </Route>
      <Route path="/order">
      <OrderForm />
      </Route>
    </Switch>
  </BrowserRouter>
);
