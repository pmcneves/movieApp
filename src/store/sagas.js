import { all } from 'redux-saga/effects'
import favouritesSagas from '../screens/Favourites/sagas'
import loginSagas from '../screens/Login/sagas'
import movieSagas from '../screens/Movie/sagas'
import moviesSagas from '../screens/Search/sagas'

export default function* sagas () {
    yield all(
        [
            loginSagas(),
            moviesSagas(),
            movieSagas(),
            favouritesSagas(),
        ]
    )
}