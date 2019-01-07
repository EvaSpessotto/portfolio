import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div> 
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeContainer}></Route>
        </Switch>
      </div>
      
    );
  }
}

export default App;
