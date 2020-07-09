import { combineReducers } from 'redux';

const patientSearch = (state = [], action) => {
  switch (action.type) {
    case 'SET_PATIENT_SEARCH':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.search
export default combineReducers({
            patientSearch,
});