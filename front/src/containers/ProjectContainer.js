import React, { Component } from 'react';
import axios from 'axios';
import { fetchSingleProject, fetchSingleProjectSuccess, fetchSingleProjectError, findProject } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Photomania from '../components/Projects/Photomania'
import Wildhub from '../components/Projects/Wildhub'
import Deadcandy from '../components/Projects/Deadcandy'
import Mycontribution from '../components/Projects/Mycontribution'

class ProjectContainer extends Component {

  // componentDidMount() {
  //   const project = this.props.projects.find(
  //     project => project.id == this.props.match.params.id
  //   );
	// 	this.props.findProject(project);
	// }
	
	componentDidMount() {
		this.props.fetchSingleProject()
		const id = this.props.match.params.id
		axios.get(`/api/projects/${id}`)
			.then(res => res.data)
			.then(project => this.props.fetchSingleProjectSuccess(project))
			.catch(error => this.props.fetchSingleProjectError(error.response.data))
	}
  
  render() {
    const project = this.props.project;
    return (
      <div>
				{
					this.props.match.params.id === "1"
					? <Photomania {...project} />
					: this.props.match.params.id === "2"
					? <Wildhub {...project} />
					: this.props.match.params.id === "3"
					? <Deadcandy {...project} />
					: this.props.match.params.id === "4"
					? <Mycontribution {...project} />
					: ""
				}
      </div>
    );
  }
}
const mapStateToProps = state => ({
	projects : state.projects.projects,
  project: state.projects.project
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