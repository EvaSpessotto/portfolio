import React, { Component } from 'react';
import axios from 'axios';
import { fetchSingleProject, fetchSingleProjectSuccess, fetchSingleProjectError } from '../actions';
import { connect } from 'react-redux';
import Project from '../components/Projects/Project';


class ProjectContainer extends Component {

  componentDidMount() {
    this.props.fetchSingleProject();
    const id = this.props.match.url.substr(1);

    axios.get(`/api/projects/${id}`)
      .then(res => res.data)
      .then(project => this.props.fetchSingleProjectSuccess(project))
      .catch(error => this.props.fetchSingleProjectError(error.response.data))
  }
  
  render() {
    const singleProject = this.props.singleProject;
    return (
      <div>
        <Project singleProject={singleProject} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  singleProject: state.singleProject
});

const mapDispatchToProps = {
  fetchSingleProject, fetchSingleProjectSuccess, fetchSingleProjectError
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);