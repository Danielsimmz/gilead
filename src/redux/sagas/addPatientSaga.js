import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// worker saga: will be fired on REGISTER_PATIENT actions
//these action register a new patient, the information is entered
//by the organizational admin or the provider, when he/she is logged into their account

function* registerPatient (action) {
    try{
        //clear any errors on the page before
        yield put ({ type: 'CLEAR_ADD_PATIENT_ERROR' });

        //passes the incoming new patient user info from the payload to the server
        yield axios.post('/api/patient/addpatient', action.payload);

        console.log('we are about to send data for a new patient', action.payload);
    }catch(error){
        console.log('Error with patient registration:', error);
        yield put ({ type: 'PATIENT_REGISTRATION_FAILED' });
    }
}



function* addPatientSaga() {
    yield takeLatest('REGISTER_PATIENT', registerPatient);
}

export default addPatientSaga;