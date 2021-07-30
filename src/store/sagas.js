import { all } from 'redux-saga/effects'
import loginSagas from '../screens/Login/sagas'

export default function* sagas () {
    yield all(
        [
            loginSagas(),
        ]
    )
}