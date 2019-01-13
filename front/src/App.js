import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
import ProjectContainer from './containers/ProjectContainer';
import About from './components/About/About';
import ContactContainer from './containers/ContactContainer';
// import NotFound from './components/NotFound';
import NotFoundContainer from './containers/NotFoundContainer';

class App extends Component {  

  render() {
    return (
      <div> 
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/project/:id" component={ProjectContainer} />
          <Route path="/a-propos" component={About} />
          <Route path="/contact" component={ContactContainer} />
          <Route component={NotFoundContainer} />
        </Switch>
        <Footer />
      </div>
      
    );
  }
}

export default App;
