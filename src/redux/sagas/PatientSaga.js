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


function* updatePatient(action) {
    try {
        //clear any errors on the page before
        yield put({
            type: 'CLEAR_UPDATE_PATIENT_ERROR'
        });

        //passes the incoming new patient user info from the payload to the server
        yield axios.post('/api/patient/updatepatient', action.payload);

        console.log('we are about to send data for a patient update', action.payload);
    } catch (error) {
        console.log('Error with patient update:', error);
        yield put({
            type: 'PATIENT_UPDATE_FAILED'
        });
    }
}


function* deletePatient(action) {
    try {
        //clear any errors on the page before
        yield put({
            type: 'CLEAR_DELETE_PATIENT_ERROR'
        });

        //passes the incoming new patient user info from the payload to the server
        yield axios.delete(`/api/patient/${action.payload}`);

        console.log('we are about to delete the patiend with this id:', action.payload);
    } catch (error) {
        console.log('Error with patient deletion:', error);
        yield put({
            type: 'PATIENT_DELETION_FAILED'
        });
    }
}



function* PatientSaga() {
    yield takeLatest('REGISTER_PATIENT', registerPatient);
    yield takeLatest('UPDATE_PATIENT', updatePatient);
    yield takeLatest('DELETE_PATIENT', deletePatient);
}

export default PatientSaga;