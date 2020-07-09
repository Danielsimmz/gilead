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




function* updateProvider(action) {
    try {
        //clear any errors on the page before
        yield put({
            type: 'CLEAR_UPDATE_PROVIDER_ERROR'
        });

        //passes the incoming updated provider user info from the payload to the server
        yield axios.post('/api/provider/updateprovider', action.payload);

        console.log('we are about to send data for a provider update', action.payload);
    } catch (error) {
        console.log('Error with provider update:', error);
        yield put({
            type: 'PROVIDER_UPDATE_FAILED'
        });
    }
}


function* deleteProvider(action) {
    try {
        //clear any errors on the page before
        yield put({
            type: 'CLEAR_DELETE_PROVIDER_ERROR'
        });

        //sends the id for the provider to be deleted to the server
        yield axios.delete(`/api/provider/${action.payload.id}`);

        console.log('we are about to delete the provider with this id:', action.payload.id);

        yield put({ type: 'SEARCH_PROVIDER', payload: action.payload })

    } catch (error) {
        console.log('Error with provider deletion:', error);
        yield put({
            type: 'PROVIDER_DELETION_FAILED'
        });
    }
}





function* ProviderSaga() {
    yield takeLatest('REGISTER_PROVIDER', registerProvider);
     yield takeLatest('UPDATE_PROVIDER', updateProvider);
     yield takeLatest('DELETE_PROVIDER', deleteProvider);
     
}

export default ProviderSaga;