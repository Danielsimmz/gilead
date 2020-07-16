
import { combineReducers } from 'redux';

const providerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PROVIDER':
            return action.payload;
        case 'UNSET_PROVIDER':
            return {};
        default:
            return state;
    }
};


const providerList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROVIDER_LIST':
            return action.payload;
        default:
            return state;
    }
}


// user will be on the redux state at:
// state.provider
export default combineReducers({
    providerReducer,
    providerList,
});