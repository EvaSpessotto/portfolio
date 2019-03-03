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
import Wildhub from "../components/Projects/Wildhub";
import DeadCandy from "../components/Projects/DeadCandy";
import Photomania from "../components/Projects/Photomania";
import Pokedex from "../components/Projects/Pokedex";


class ProjectContainer extends Component {
  componentDidMount() {
    const project = this.props.projects.find(
      project => project.id == this.props.match.params.id
    );
		this.props.findProject(project);
  }

  render() {
		
    return (
      <div>
				{
					this.props.match.params.id === '1' 
					? <DeadCandy {...this.props.project} />
					: this.props.match.params.id === '2'
					? <Photomania {...this.props.project} />
					: this.props.match.params.id === '3'
					? <Pokedex {...this.props.project} />
					: this.props.match.params.id === '4'
					? <Wildhub {...this.props.project} />
					: ''
				}
				{console.log(this.props.project)}
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
