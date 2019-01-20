import { 
  FORM_CHANGE_FIELD
} from '../actions';

const reducer = (state = null, action ) => {
  switch (action.type) {
    case FORM_CHANGE_FIELD: {
      return {...state, [action.key]: action.value}
    }
    default:
      return state;
  }
};

export default reducer;
