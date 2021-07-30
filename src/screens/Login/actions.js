const types = {
    START_LOGIN : 'START_LOGIN',
    LOGIN_SUCESSFUL: 'LOGIN_SUCESSFUL',
    LOGIN_FAILED: 'LOGIN_FAILED',
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
