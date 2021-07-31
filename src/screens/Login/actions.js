const types = {
    START_LOGIN : 'START_LOGIN',
    LOGIN_SUCESSFUL: 'LOGIN_SUCESSFUL',
    LOGIN_FAILED: 'LOGIN_FAILED',
    START_LOGOUT: 'START_LOGOUT',
    LOGOUT_SUCESSFUL: 'LOGOUT_SUCESSFUL',
    LOGOUT_FAILED: 'LOGOUT_FAILED'
}

export default types

export const startLogin = () => ({
    type: types.START_LOGIN
})

export const loginSucessful = uid => ({
    type: types.LOGIN_SUCESSFUL,
    uid
})

export const loginFailed = err => ({
    type: types.LOGIN_FAILED,
    err
})

export const startLogout = () => ({
    type: types.START_LOGOUT
})

export const logoutSucessful = () => ({
    type: types.LOGOUT_SUCESSFUL
})

export const logoutFailed = err => ({
    type: types.LOGOUT_FAILED,
    err
})

