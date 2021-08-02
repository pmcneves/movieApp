const types = {
    START_FETCHING: 'START_FETCHING',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_NO_RESPONSE: 'FETCH_NO_RESPONSE',
    FETCH_FAIL: 'FETCH_FAIL',
}

export default types

export const fetchMovies = searchData => ({
    type: types.START_FETCHING,
    searchData
})

export const fetchSuccess = dataFromApi => ({
    type: types.FETCH_SUCCESS,
    dataFromApi
})

export const fetchNoResponse = errorFromApi => ({
    type: types.FETCH_NO_RESPONSE,
    errorFromApi
})

export const fetchFailure = error => ({
    type: types.FETCH_FAIL,
    error
})