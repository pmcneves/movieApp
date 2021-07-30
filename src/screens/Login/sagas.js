import { call, put, takeLatest } from "redux-saga/effects";
import { loginToDb } from "../../database";
import types, { loginFailed, loginSucessful } from "./actions";


function* logIn() {
    try {
        const {user} = yield call(loginToDb)
        yield put(loginSucessful(user.uid))
    } catch(err) {
        yield put(loginFailed(err))
    }
}

export default function* loginSagas() {
    yield takeLatest(types.START_LOGIN, logIn);
}