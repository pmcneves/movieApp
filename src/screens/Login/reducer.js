import types from "./actions";

const initialState = {
    loading: false,
    authed: false,
    activeUid: '',
    error: {
        name: '',
        message: '',
    }
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.START_LOGIN:
            return {
                ...state,
                loading: true,
            }
        case types.LOGIN_SUCESSFUL:
            return {
                ...state,
                loading: false,
                authed: true,
                activeUid: action.uid
            }
        case types.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: {
                    name: action.err.name,
                    message: action.err.message,
                }
            }
        case types.START_LOGIN:
            return {
                ...state,
                loading: true
            }
        case types.LOGOUT_SUCESSFUL:
            return {
                ...state,
                loading: false,
                authed: false,
                activeUid: '',
            }
        case types.LOGOUT_FAILED:
            return {
                ...state,
                loading: false,
                error: {
                    name: action.err.name,
                    message: action.err.message,
                }
            }
        default:
            return state
    }
}

export default authReducer