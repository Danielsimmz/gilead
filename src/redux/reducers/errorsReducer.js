import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
//when the organizational admin is trying to login
const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_INPUT_ERROR':
      return 'Enter your username and password!';
    case 'LOGIN_FAILED':
      return 'Oops! The username and password didn\'t match. Try again!';
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! Is the server running?';
    default:
      return state;
  }
};


const searchMessage = (state='', action) => {

    switch (action.type){
      case 'CLEAR_SEARCH_ERROR':
        return '';
      case 'SEARCH_INPUT_ERROR':
        return 'Oops, No Bueno! Try Again, Make Sure All The Fields Are Filled In!';
      case 'PATIENT_SEARCH_FAILED':
      return 'Oops! That didn\'t work. Your patient search info is a no go. Uno mas, Try again!';
      default: 
        return state;
    }
}



//loginProvider holds the string that will display
//on the login screen if there's an error 
//when the provider is trying to login on their
//organizational route
const loginProvider = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_PROVIDER_LOGIN_ERROR':
      return '';
    case 'PROVIDER_LOGIN_INPUT_ERROR':
      return 'Enter your username and password!';
    case 'PROVIDER_LOGIN_FAILED':
      return 'Oops! The username and password didn\'t match. Try again!';
    case 'PROVIDER_LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! Is the server running?';
    default:
      return state;
  }
};


// registrationMessage holds the string that will display
// on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_INPUT_ERROR':
      return 'Choose a username and password!';
    case 'REGISTRATION_FAILED':
      return 'Oops! That didn\'t work. The username might already be taken. Try again!';
    default:
      return state;
  }
};



const addProviderError = (state = '', action) => {
  switch(action.type){
    case 'CLEAR_ADD_PROVIDER_ERROR':
      return '';
    case 'ADD_PROVIDER_ERROR':
      return 'Make sure all the fields are filled out!';
    case 'PROVIDER_REGISTRATION_FAILED':
      return 'Oops! That didn\'t work. The new provider info not saved successfully. Try again!';
    default:
      return state;
  }
}


const addPatientError = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_ADD_PATIENT_ERROR':
      return '';
    case 'ADD_PATIENT_ERROR':
      return 'Make sure all the fields are filled out!';
    case 'PATIENT_REGISTRATION_FAILED':
      return 'Oops! That didn\'t work. The new patient info not saved successfully. Try again!';
    default:
      return state;
  }
}


const updatePatientError = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_UPDATE_PATIENT_ERROR':
      return '';
    case 'UPDATE_PATIENT_ERROR':
      return 'Make sure all the fields are filled out!';
    case 'PATIENT_UPDATE_FAILED':
      return 'Oops! That didn\'t work. The new patient info not saved successfully. Try again!';
    default:
      return state;
  }
}


const deletePatientError = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_DELETE_PATIENT_ERROR':
      return '';
    case 'DELETE_PATIENT_ERROR':
      return 'Sorry Try Again!';
    case 'PATIENT_DELETION_FAILED':
      return 'Oops! That didn\'t work. The new patient info not deleted successfully. Try again!';
    default:
      return state;
  }
}



// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  loginMessage,
  registrationMessage,
  addProviderError,
  loginProvider,
  addPatientError,
  updatePatientError,
  searchMessage,
  deletePatientError,
});
