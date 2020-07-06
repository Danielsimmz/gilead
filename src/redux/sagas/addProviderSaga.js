import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// worker saga: will be fired on REGISTER_PROVIDER actions
//these action register a new medical provider, the information is entered
//by the organizational admin, when he/she is logged into their account

function* registerProvider (action) {
    try{
        //clear any errors on the page before
        yield put ({ type: 'CLEAR_ADD_PROVIDER_ERROR' });

        //passes the incoming new provider user info from the payload to the server
        yield axios.post('/api/user/addprovider', action.payload);

        console.log('we are about to send data for a new provider', action.payload);
    }catch(error){
        console.log('Error with provider registration:', error);
        yield put ({ type: 'PROVIDER_REGISTRATION_FAILED' });
    }
}



function* addProviderSaga() {
    yield takeLatest('REGISTER_PROVIDER', registerProvider);
}

export default addProviderSaga;