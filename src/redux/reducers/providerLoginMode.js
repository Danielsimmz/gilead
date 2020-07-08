const providerloginMode = (state = 'nologin', action) => {
    switch (action.type) {
        case 'SET_TO_PROVIDER_LOGIN_MODE':
            return 'loginPage';
        case 'UNSET_TO_PROVIDER_LOGIN_MODE':
            return 'nologin'
        default:
            return state;
    }
};

// loginMode will be on the redux state at:
// state.providerloginMode
export default providerloginMode;