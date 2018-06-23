import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './mainPage/Login';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import Router from './Router';


const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);


class App extends Component {
  ComponentDidMount() {
    this.calc();
  }
  getSum(total, num) {
      return total + num;
  }
  calc() {
    const a = [[1,3],[3,6],[2,2],[8,2],[5,5]];
    const arr = a.filter(b => {
      return (b.reduce(this.getSum()) === 4 || b.reduce(this.getSum()) === 10);
    })
    arr.map(d => {
      const Sum = d.reduce(this.getSum());
      console.log(`The sum of ${d} is ${Sum}`);
    })
  }
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    );
  }
}

export default App;
