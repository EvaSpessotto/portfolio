import React, { Component } from 'react';
import axios from 'axios';
import { fetchProjects, fetchProjectsSuccess, fetchProjectsError } from '../actions';
import { connect } from 'react-redux';
import HomePres from '../components/Home/HomePres';
import HomeProjectsList from '../components/Home/HomeProjectsList';
import { FadeInDiv } from '../data/styledComponents';


class HomeContainer extends Component {
  
  componentDidMount() {
    this.props.fetchProjects();
    axios.get('/portfolioprojects')
    .then(res => res.data)
    .then(projects => this.props.fetchProjectsSuccess(projects))
    .catch(error => this.props.fetchProjectsError(error.response.data))
	}
	
  render() {
    return (
      <FadeInDiv>
        <HomePres/>
        <HomeProjectsList />
      </FadeInDiv>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects
});

const mapDispatchToProps = {
	fetchProjects, fetchProjectsSuccess, fetchProjectsError
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);