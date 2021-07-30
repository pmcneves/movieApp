import { all } from 'redux-saga/effects'
import loginSagas from '../screens/Login/sagas'
import movieSagas from '../screens/Movie/sagas'
import moviesSagas from '../screens/Search/sagas'

export default function* sagas () {
    yield all(
        [
            loginSagas(),
            moviesSagas(),
            movieSagas(),
        ]
    )
}