import { put, takeLatest } from "redux-saga/effects";
import types, { fetchSuccess, fetchFailure} from "./actions";


function* getMovies({searchValue}) {
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=10671e9d`
    try {
        const {Search} = yield fetch(url).then(res=>res.json())
        yield put(fetchSuccess(Search))
    } catch(err) {
        yield put(fetchFailure(err))
    }
}

export default function* moviesSagas() {
    yield takeLatest(types.START_FETCHING, getMovies);
}