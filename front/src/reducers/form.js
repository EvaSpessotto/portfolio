import { 
  FORM_CHANGE_FIELD,
  FORM_SUBMIT
  
} from '../actions';

const initialState = {
  name: '', 
  email: '', 
  subject: '',
  message: ''
}

const reducer = (state = initialState, action ) => {
  switch (action.type) {
    case FORM_CHANGE_FIELD: {
      return {...state, [action.key]: action.value}
    }
    case FORM_SUBMIT: {
      return initialState
    }
    default:
      return state;
  }
};

export default reducer;
