const initiState = {
    authError: null 
}

const authReducer = (state = initiState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signed out')
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signed up')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signed up error', action.err.message)
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer