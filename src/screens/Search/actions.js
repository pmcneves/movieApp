const types = {
    START_FETCHING: 'START_FETCHING',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAIL: 'FETCH_FAIL',
}

export default types

export const fetchMovies = searchValue => ({
    type: types.START_FETCHING,
    searchValue
})

export const fetchSuccess = movies => ({
    type: types.FETCH_SUCCESS,
    movies
})

export const fetchFailure = error => ({
    type: types.FETCH_FAIL,
    error
})