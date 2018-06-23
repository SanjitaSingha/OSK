import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './mainPage/Login';
import HomePage from './mainPage/HomePage';

const CustomLinkExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/food" component={HomePage} />
    </div>
  </Router>
);

export default CustomLinkExample;
