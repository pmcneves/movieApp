import { call, put, takeLatest } from "redux-saga/effects";
import types, { fetchMovieSuccess, fetchMovieFailure } from "./actions";


function* getMovie({id}) {
    const url = `http://www.omdbapi.com/?i=${id}&type=movie&apikey=10671e9d`
    try {
        const response = yield call (fetch, url)
        const movie = yield response.json()
        const movieObj = {
            ...movie,
            Actors: movie.Actors.split(", "),
            Genre: movie.Genre.split(", "),
            Director: movie.Director.split(", "),
            Language: movie.Language.split(", ")
        }
        yield put(fetchMovieSuccess(movieObj))
    } catch(err) {
        yield put(fetchMovieFailure(err))
    }
}

export default function* movieSagas() {
    yield takeLatest(types.START_FETCHING_MOVIE, getMovie);
}