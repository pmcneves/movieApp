import types from "./actions";

const initialState = {
    loading: false,
    authed: false,
    activeUid: '',
    error: ''
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.START_LOGIN:
            return {
                ...state,
                loading: true,
            }
        case types.LOGIN_SUCESSFUL:
            console.log('success')
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
                error: action.err
            }
        default:
            return state
    }
}

export default authReducer