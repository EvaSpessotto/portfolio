import React, { Component } from "react";
import axios from "axios";
import {
  fetchSingleProject,
  fetchSingleProjectSuccess,
  fetchSingleProjectError,
  findProject
} from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Project from "../components/Projects/Project";

class ProjectContainer extends Component {
  componentDidMount() {
    const project = this.props.projects.find(
      project => project.id == this.props.match.params.id
    );
		this.props.findProject(project);
  }

  render() {
    console.log(this.props.project)
    return (
      <div>
        <Project {...this.props.project} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  project: state.projects.project,
  projects: state.projects.projects
});

const mapDispatchToProps = {
  fetchSingleProject,
  fetchSingleProjectSuccess,
  fetchSingleProjectError,
  findProject
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectContainer)
);
