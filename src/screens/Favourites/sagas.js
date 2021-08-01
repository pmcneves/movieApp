import { call, put, takeLatest, select } from "redux-saga/effects";
import { addFavouriteToDb, fetchFavouritesFromDb, removeFavouriteFromDb } from "../../database";
import types, { addFavSuccess, hasAwardsChecked, removeFavSuccess, removeMovieFailure, setFavFail, setFavSuccess, setGenre, setLanguage, setTextFilters, sortByRating, sortByYear } from "./actions";
import { currentUserId, favourites } from "./selectors";




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
        console.log(favourites)
        yield put(setFavSuccess(favourites))
    } catch(err) {
        yield put(setFavFail(err))
    }
}

function* removeMovie({id}) {
    const uid = yield select(currentUserId)
    const ids = {
        uid,
        id
    }
    try {
        yield call(removeFavouriteFromDb, ids)
        yield put(removeFavSuccess(id))
    } catch(err) {
        yield put(removeMovieFailure(err))
    }
}

function* addMovie({favMovie}) {
    const uid = yield select(currentUserId)
    const data = {
        favMovie: {
            ...favMovie,
            isFavourite: true,
        },
        uid
    }
    try {
        yield call(addFavouriteToDb, data)
        yield put(addFavSuccess(data.favMovie))
    } catch(err) {
        console.log(err)
    }
}

export default function* favouritesSagas() {
    yield takeLatest(types.START_ADD_FAV, addMovie);
    yield takeLatest(types.START_REMOVE_FAV, removeMovie)
    yield takeLatest(types.START_SET_FAV, setFavourites);
    yield takeLatest(types.START_SET_FILTERS, setFilters);
}