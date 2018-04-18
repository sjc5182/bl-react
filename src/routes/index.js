import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/mainpage" exact component={MainPage} />
    </Switch>
  </BrowserRouter>
);
