import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './mainPage/Login';
import HomePage from './mainPage/HomePage';
import AllFood from './mainPage/AllFood';

const CustomLinkExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/food" component={HomePage} />
      <Route path="/all_food" component={AllFood} />
    </div>
  </Router>
);

export default CustomLinkExample;
