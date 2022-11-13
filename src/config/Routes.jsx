import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Catalog from '../pages/catalog';
import Detail from '../pages/detail/detail';

const Routes = () => {
  return (
    <Switch>
      <Route
          path='/:category/search/:keyword'
          component={Catalog}
      />
      <Route
          path='/:category/:id'
          component={Detail}
      />
      <Route
          path='/:category'
          component={Catalog}
      />
      <Route
          path='/'
          exact 
          component={Home}
      />
    </Switch>
  );
}

export default Routes;