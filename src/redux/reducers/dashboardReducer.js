import { combineReducers } from 'redux';



const dashboardUser = (state = [], action) => {
    switch (action.type) {
        case 'SET_DASH':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.search
export default combineReducers({
    dashboardUser,
});