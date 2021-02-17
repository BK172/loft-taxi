import React from 'react';
import Login from '../pages/login/login';
import Map from '../pages/map/map';
import Profile from '../pages/profile/profile';
import Registration from '../pages/registration/registration';
import PrivateRoute from '../private-route/private-route';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/registration' component={Registration} />
      <PrivateRoute path='/map' component={Map} />
      <PrivateRoute path='/profile' component={Profile} />
    </Switch>
  );
};

export default App;