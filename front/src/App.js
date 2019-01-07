import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
import Project from './components/Projects/Project';

class App extends Component {
  render() {
    return (
      <div> 
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeContainer}></Route>
          <Route path="/project" component={Project}></Route>
        </Switch>
        <Footer />
      </div>
      
    );
  }
}

export default App;
