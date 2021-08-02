import { call, put, select, takeLatest } from "redux-saga/effects";
import { checkIsMovieFavourite } from "../../database";
import { currentUserId } from "../Favourites/selectors";
import types, { fetchMovieSuccess, fetchMovieFailure } from "./actions";




function* getMovie({id}) {
    const url = `https://www.omdbapi.com/?i=${id}&type=movie&apikey=10671e9d`
    const userId = yield select(currentUserId)
    const checkData = {
        userId,
        id
    }
    try {
        const response = yield call (fetch, url)
        const isFavourite = yield call(checkIsMovieFavourite, checkData)
        const movie = yield response.json()
        const movieObj = {
            ...movie,
            Actors: movie.Actors.split(", "),
            Genre: movie.Genre.split(", "),
            Director: movie.Director.split(", "),
            Language: movie.Language.split(", "),
            isFavourite: !!isFavourite
        }
        yield put(fetchMovieSuccess(movieObj))
    } catch(err) {
        yield put(fetchMovieFailure(err))
    }
}

export default function* movieSagas() {
    yield takeLatest(types.START_FETCHING_MOVIE, getMovie);
}