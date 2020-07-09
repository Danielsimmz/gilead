import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// worker saga: will be fired on SEARCH_PATIENT actions
//this action sends information for a patient search to the server, the information is entered
//by the organizational admin or provider, when he/she is logged into their account

function* searchPatient (action) {
    try{
        //clear any errors on the page before
        yield put ({ type: 'CLEAR_SEARCH_ERROR' });

         console.log('we are about to send data for a patient search', action.payload);
       
         //passes the incoming search query terms from the payload to the server
       const response = yield axios.get(`/api/patient/searchpatient/?first_name=${action.payload.first_name}&middle_name=${action.payload.middle_name}&last_name=${action.payload.last_name}&sex=${action.payload.sex}&date_of_birth=${action.payload.date_of_birth}`);

       yield put ({type: 'SET_PATIENT_SEARCH', payload: response.data});

       console.log('Here are the search results', response.data);
    }catch(error){
        console.log('Error with patient search:', error);
        yield put ({ type: 'PATIENT_SEARCH_FAILED' });
    }
}



function* searchSaga() {
    yield takeLatest('SEARCH_PATIENT', searchPatient);
}

export default searchSaga;