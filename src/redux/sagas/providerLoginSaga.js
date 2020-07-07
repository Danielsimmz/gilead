import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "PROVIDER_LOGIN" actions
function* loginProvider(action) {
  try {
    // clear any existing error on the login page
    yield put({ type: 'CLEAR_PROVIDER_LOGIN_ERROR' });

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    yield axios.post('/api/provider/login', action.payload, config);
    
    // after the user has logged in
    // get the user information from the server
    yield put({type: 'FETCH_PROVIDER'});
  } catch (error) {
    console.log('Error with user login:', error);
    if (error.response.status === 401) {
      // The 401 is the error status sent from passport
      // if user isn't in the database or
      // if the username and password don't match in the database
      yield put({ type: 'PROVIDER_LOGIN_FAILED' });
    } else {
      // Got an error that wasn't a 401
      // Could be anything, but most common cause is the server is not started
      yield put({ type: 'PROVIDER_LOGIN_FAILED_NO_CODE' });
    }
  }
}

// worker Saga: will be fired on "PROVIDER_LOGOUT" actions
function* logoutProvider(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // when the server recognizes the user session
    // it will end the session
    yield axios.post('/api/provider/logout', config);

    // now that the session has ended on the server
    // remove the client-side user object to let
    // the client-side code know the user is logged out
    yield put({ type: 'UNSET_PROVIDER' });

  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* providerLoginSaga() {
  yield takeLatest('PROVIDER_LOGIN', loginProvider);
  yield takeLatest('PROVIDER_LOGOUT', logoutProvider);
}

export default providerLoginSaga;
