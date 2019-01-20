import { combineReducers } from 'redux';
import projects from './projects';
import form from './form';

const reducer = combineReducers({
  projects, form
});

export default reducer;