import React, { Component } from "react";
import axios from "axios";
import {
  fetchSingleProject,
  fetchSingleProjectSuccess,
  fetchSingleProjectError,
  findProject
} from "../actions";
import { connect } from "react-redux";
import Project from "../components/Projects/Project";

class ProjectContainer extends Component {
  componentDidMount() {
  console.log(  this.props.projects.filter(project => 
      project.id === 1
		))
		
		findProject("Hello")
	}
	
	onClick() {
		findProject;
		console.log("oui")
	}

  render() {
    const project = this.props.project;
    return (
      <div style={{marginTop: '200px'}}> 
				<button onClick={this.onClick} >Click me </button>
        <Project singleProject={project} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer);
