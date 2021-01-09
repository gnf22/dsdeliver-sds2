import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Orders from './pages/Orders';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
