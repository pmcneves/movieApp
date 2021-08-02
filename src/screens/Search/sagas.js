import { put, takeLatest } from "redux-saga/effects";
import types, { fetchSuccess, fetchFailure, fetchNoResponse} from "./actions";


function* getMovies({searchData}) {
    const url = `https://www.omdbapi.com/?s=${searchData.search}&type=movie&apikey=10671e9d&page=${searchData.currentPage}`
    try {
        const data = yield fetch(url).then(res=>res.json())
        if(data.Response === 'True') {
            yield put(fetchSuccess(data))
        } else { 
            yield put(fetchNoResponse(data.Error))
        }
    } catch(err) {
        yield put(fetchFailure(err))
    }
}

export default function* moviesSagas() {
    yield takeLatest(types.START_FETCHING, getMovies);
}