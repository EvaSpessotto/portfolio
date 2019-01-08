import React, { Component } from 'react';
import axios from 'axios';
import { fetchProjects, fetchProjectsSuccess, fetchProjectsError } from '../actions';
import { connect } from 'react-redux';
import HomePres from '../components/Home/HomePres';
import HomeProjectsList from '../components/Home/HomeProjectsList';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchProjects();
    axios.get('/api/projects')
    .then(res => res.data)
    .then(projects => this.props.fetchProjectsSuccess(projects))
    .catch(error => this.props.fetchProjectsError(error.response.data))

  }

  render() {
    return (
      <div>
        <HomePres />
        <HomeProjectsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {
  fetchProjects, fetchProjectsSuccess, fetchProjectsError
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);