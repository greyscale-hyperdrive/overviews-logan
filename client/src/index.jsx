import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Overview from './components/Overview.jsx';

ReactDOM.render(
  (
    <BrowserRouter>
      <Route exact path="/restaurant/:restaurantId" component={Overview} />
    </BrowserRouter>
  ),
  document.getElementById('overviewModule'),
);
