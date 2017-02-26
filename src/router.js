import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

//Layout
import MainLayout from './components/layouts/MainLayout';

//Containers
import CustomersContainer from './components/containers/Customers';
import ProductsContainer from './components/containers/Products';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRedirect to="/customers" />
      <Route path="/customers" component={CustomersContainer} />
      <Route path="/products" component={ProductsContainer} />
    </Route>
  </Router>
);
