export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR';

export const fetchProjects = () => ({
  type: FETCH_PROJECTS
});

export const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  projects
});

export const fetchProjectsError = (error) => ({
  type: FETCH_PROJECTS_ERROR,
  error
});