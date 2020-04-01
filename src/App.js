import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './config/store';

import Home from './views/Home';
import Todo from './views/Todo';
import Header from './components/Header';

import './App.css';

export const App = () =>
  <Provider store={configureStore()}>
    <Router id="app">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/todo" component={Todo} />
    </Router>
  </Provider>;

export default App;
