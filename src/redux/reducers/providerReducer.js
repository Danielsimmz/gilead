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

// user will be on the redux state at:
// state.provider
export default providerReducer;
