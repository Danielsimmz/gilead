import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// worker saga: will be fired on BASIC_VITALS actions
//This is posted by the provider, when he/she is logged into their account
function* postBasicVitals(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_BASIC_VITALS_ERROR'
        });
       console.log('We are about to post basic vitals', action.payload);

        //passes the incoming basic vitals from the payload to the server
        yield axios.post('/api/icu/addbasicvitals', action.payload);

    } catch (error) {
        console.log('Error with posting basic vitals:', error);
        yield put({
            type: 'ADD_BASIC_VITALS_ERROR'
        });
    }
}


// worker saga: will be fired on 'BLOOD_GASES' actions
//This is posted by the provider, when he/she is logged into their account

function* postBloodGases(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_BLOOD_GASES_ERROR'
        });
        console.log('We are about to blood gases', action.payload);

        //passes the incoming blood gases from the payload to the server
        yield axios.post('/api/icu/addbloodgases', action.payload);

    } catch (error) {
        console.log('Error with posting blood gases:', error);
        yield put({
            type: 'ADD_BLOOD_GASES_ERROR'
        });
    }
}



function* postCardiacResp(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_CARDIAC_RESP_ERROR'
        });
        console.log('We are about to Cardiac & Resp inputs', action.payload);

        //passes the incoming cardiac resp inputs from the payload to the server
        yield axios.post('/api/icu/addcardiacresp', action.payload);

    } catch (error) {
        console.log('Error with posting cardiac resp:', error);
        yield put({
            type: 'ADD_CARDIAC_RESP_ERROR'
        });
    }
}



function* postFluidBalance(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_FLUID_BALANCE_ERROR'
        });
        console.log('We are about to Fluid Balance inputs', action.payload);

        //passes the incoming fluid balance inputs from the payload to the server
        yield axios.post('/api/icu/addfluidbalance', action.payload);

    } catch (error) {
        console.log('Error with posting fluid balance:', error);
        yield put({
            type: 'ADD_FLUID_BALANCE_ERROR'
        });
    }
}




function* postGeneralInfo(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_GENERAL_INFO_ERROR'
        });
        console.log('We are about to General Info inputs', action.payload);

        //passes the incoming general info inputs from the payload to the server
        yield axios.post('/api/icu/addgeneralinfo', action.payload);

    } catch (error) {
        console.log('Error with posting general info:', error);
        yield put({
            type: 'ADD_GENERAL_INFO_ERROR'
        });
    }
}




function* postMedList(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_MED_LIST_ERROR'
        });
        console.log('We are about to send Med List inputs', action.payload);

        //passes the incoming Med list inputs from the payload to the server
        yield axios.post('/api/icu/addmedlist', action.payload);

    } catch (error) {
        console.log('Error with posting med list:', error);
        yield put({
            type: 'ADD_MED_LIST_ERROR'
        });
    }
}



function* postIcuMisc(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_ICU_MISC_ERROR'
        });
        console.log('We are about to send ICU Miscellaneous inputs', action.payload);

        //passes the incoming ICU Miscellaneous inputs from the payload to the server
        yield axios.post('/api/icu/addicumisc', action.payload);

    } catch (error) {
        console.log('Error with posting ICU Misc:', error);
        yield put({
            type: 'ADD_ICU_MISC_ERROR'
        });
    }
}


function* postSpecInv(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_SPEC_INV_ERROR'
        });
        console.log('We are about to send Special Investigation inputs', action.payload);

        //passes the incoming special investigation inputs from the payload to the server
        yield axios.post('/api/icu/addspecialinv', action.payload);

    } catch (error) {
        console.log('Error with posting special investigation:', error);
        yield put({
            type: 'ADD_SPEC_INV_ERROR'
        });
    }
}



function* postLabEntering(action) {
    try {

        //clear any errors on the page before
        yield put({
            type: 'CLEAR_ADD_LAB_ENTERING_ERROR'
        });
        console.log('We are about to send lab entering inputs', action.payload);

        //passes the incoming lab entering inputs from the payload to the server
        yield axios.post('/api/icu/addlabentering', action.payload);

    } catch (error) {
        console.log('Error with posting lab entering:', error);
        yield put({
            type: 'ADD_LAB_ENTERING_ERROR'
        });
    }
}





function* ICUSaga() {
    yield takeLatest('BASIC_VITALS', postBasicVitals);
    yield takeLatest('BLOOD_GASES', postBloodGases);
     yield takeLatest('CARDIAC_RESP', postCardiacResp);
     yield takeLatest('FLUID_BALANCE', postFluidBalance);
     yield takeLatest('GENERAL_INFO', postGeneralInfo);
     yield takeLatest('MED_LIST', postMedList);
     yield takeLatest('ICU_MISC', postIcuMisc);
     yield takeLatest('SPEC_INV', postSpecInv);
     yield takeLatest('LAB_ENTERING', postLabEntering);
    
}

export default ICUSaga;