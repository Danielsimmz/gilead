import { combineReducers } from 'redux';
import { USER_ACTIONS } from '../actions/userActions';

//id holds onto the user.id from passport/database
const id = (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return action.user.id || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
};

//username holds onto the user.username from passport/database
const username = (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return action.user.username || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
};

//isLoading holds the boolean that tracks whether or not this async call is out in the internet or not
const isLoading = (state = false, action) => {
  switch (action.type) {
    case USER_ACTIONS.REQUEST_START:
      return true;
    case USER_ACTIONS.REQUEST_DONE:
      return false;
    default:
      return state;
  }
};

//make one object that has keys id, username, isLoading
export default combineReducers({
  id,
  username,
  isLoading,
});
