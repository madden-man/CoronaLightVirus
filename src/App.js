import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Todo from './views/Todo';
import Header from './components/Header';

export const App = () =>
  <Router id="app">
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/todo" component={Todo} />
  </Router>;

export default App;
