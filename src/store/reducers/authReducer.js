const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_SUCCESS'){
        console.log('login success')
        return {
            ...state,
            authError: null
        }

    }
    if (action.type === 'LOGIN_FAILED'){
        console.log('login failed');
        return {
            ...state,
            authError: "Login failed"
        }
    }
    if (action.type === 'LOGOUT_SUCCESS'){
        console.log('logout success');
    }
    if (action.type === 'USER_CREATED'){
        console.log('user creation success');
        return {
            ...state,
            authError: null
        }
    }
    if (action.type === 'USER_CREATION_FAILED'){
        console.log('user creation failed');
        return {
            ...state,
            authError: "User creation failed"
        }
    }
    return state;
}

export default authReducer