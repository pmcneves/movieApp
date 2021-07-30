import { call, put, takeLatest } from "redux-saga/effects";
import { loginToDb } from "../../database";
import types, { loginFailed, loginSucessful } from "./actions";


const getUid = uid => localStorage.setItem('uid', uid)

function* logIn() {
    try {
        const {user} = yield call(loginToDb)
        yield put(loginSucessful(user.uid))
        yield call(getUid, user.uid)
    } catch(err) {
        yield put(loginFailed(err))
    }
}

export default function* loginSagas() {
    yield takeLatest(types.START_LOGIN, logIn);
}