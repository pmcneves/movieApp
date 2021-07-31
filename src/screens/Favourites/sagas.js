import { call, put, takeLatest, select } from "redux-saga/effects";
import { addFavouriteToDb, fetchFavouritesFromDb } from "../../database";
import types, { addFavSuccess, hasAwardsChecked, setFavFail, setFavSuccess, setGenre, setLanguage, setTextFilters, sortByRating, sortByYear } from "./actions";
import { currentUserId } from "./selectors";


function* setFilters({filterObj}) {
    try {
        switch(filterObj.filterType) {
            case 'title':
                yield put(setTextFilters(filterObj.data))
                break;
            case 'sortBy':
                if(filterObj.data === 'year') {
                    yield put(sortByYear(filterObj.data))
                } else {
                    yield put(sortByRating(filterObj.data))
                }
                break;
            case 'awards':
                yield put(hasAwardsChecked())
                break;
            case 'genre':
                yield put(setGenre(filterObj.data))
                break;
            case 'language':
                yield put(setLanguage(filterObj.data))
                break;
        }

    } catch(err) {
        console.log(err)
    }
}

function* setFavourites() {
    const uid = yield select(currentUserId)
    try {
        const favourites = yield call(fetchFavouritesFromDb, uid)
        yield put(setFavSuccess(favourites))
    } catch(err) {
        yield put(setFavFail(err))
    }
}

function* addMovie({favMovie}) {
    const uid = yield select(currentUserId)
    const data = {
        favMovie,
        uid
    }
    try {
        yield call(addFavouriteToDb, data)
        yield put(addFavSuccess(favMovie))
    } catch(err) {
        console.log(err)
    }

}

export default function* favouritesSagas() {
    yield takeLatest(types.START_ADD_FAV, addMovie);
    yield takeLatest(types.START_SET_FAV, setFavourites);
    yield takeLatest(types.START_SET_FILTERS, setFilters);
}