import { 
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
  FETCH_SINGLE_PROJECT,
  FETCH_SINGLE_PROJECT_SUCCESS,
	FETCH_SINGLE_PROJECT_ERROR,
	FIND_PROJECT
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  projects: [],
  project: null,
};

const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_PROJECTS: {
      return {...state, loading: true}
    }
    case FETCH_PROJECTS_SUCCESS: {
      return {...state, loading: false, projects: action.projects}
    }
    case FETCH_PROJECTS_ERROR: {
      return {...state, loading: false, error: action.error}
    }
    case FETCH_SINGLE_PROJECT: {
      return {...state, loading: true}
    }
    case FETCH_SINGLE_PROJECT_SUCCESS: {
      return {...state, loading: false, project: action.project}
    }
    case FETCH_SINGLE_PROJECT_ERROR: {
      return {...state, loading: false, error: action.error}
		}
		case FIND_PROJECT: {
			return {...state, project: action.project}
		}
    default:
      return state;
  }
};

export default reducer;
