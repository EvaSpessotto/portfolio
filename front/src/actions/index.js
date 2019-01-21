
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR';

export const FETCH_SINGLE_PROJECT = 'FETCH_SINGLE_PROJECT';
export const FETCH_SINGLE_PROJECT_SUCCESS = 'FETCH_SINGLE_PROJECT_SUCCESS';
export const FETCH_SINGLE_PROJECT_ERROR = 'FETCH_SINGLE_PROJECT_ERROR';

export const FORM_CHANGE_FIELD = 'FORM_CHANGE_FIELD';
export const FORM_SUBMIT = 'FORM_SUBMIT';


// Récupérer tous les projets (nom, cover)
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

// Récupérer les données d'un seul projet avec son ID
export const fetchSingleProject = () => ({
  type: FETCH_SINGLE_PROJECT
});

export const fetchSingleProjectSuccess = (singleProject) => ({
  type: FETCH_SINGLE_PROJECT_SUCCESS,
  singleProject
});

export const fetchSingleProjectError = (error) => ({
  type: FETCH_SINGLE_PROJECT_ERROR,
  error
});


// le forumaire de contact
export const formChangeField = (key, value) => {
  return{
    type: FORM_CHANGE_FIELD,
    key, 
    value
  }
}

export const formSubmit = () => {
  return{
    type: FORM_SUBMIT
  }
}