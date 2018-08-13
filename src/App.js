import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import Jobs from './Components/Jobs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Jobs} />
          <Route path="/search/:word" component={Search} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
