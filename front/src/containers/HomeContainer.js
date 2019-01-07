import React, { Component, Fragment } from 'react';
import HomePres from '../components/Home/HomePres';
import HomeProjectsList from '../components/Home/HomeProjectsList';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <HomePres />
        <HomeProjectsList />
      </div>
    );
  }
}

export default HomeContainer;