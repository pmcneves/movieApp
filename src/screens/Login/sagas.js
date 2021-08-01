import { call, put, takeLatest } from "redux-saga/effects";
import { loginToDb, logoutFromDb } from "../../database";
import { startSetFav } from "../Favourites/actions";
import types, { loginFailed, loginSucessful, logoutFailed, logoutSucessful } from "./actions";


const getUid = uid => localStorage.setItem('uid', uid)
const clearStorage = () => localStorage.clear()

function* logIn() {
    try {
        const {user} = yield call(loginToDb)
        console.log(user.uid)
        yield put(loginSucessful(user.uid))
        yield call(getUid, user.uid)
    } catch(err) {
        yield put(loginFailed(err))
    }
}

function* logOut() {
    try {
        yield call(logoutFromDb)
        yield put(logoutSucessful())
        yield call(clearStorage)
    } catch(err) {
        yield put(logoutFailed(err))
    }
}

export default function* loginSagas() {
    yield takeLatest(types.START_LOGIN, logIn);
    yield takeLatest(types.START_LOGOUT, logOut);
}