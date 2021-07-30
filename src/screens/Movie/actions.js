const types = {
    START_FETCHING_MOVIE: 'START_FETCHING_MOVIE',
    FETCH_MOVIE_SUCCESS: 'FETCH_MOVIE_SUCCESS',
    FETCH_MOVIE_FAIL: 'FETCH_MOVIE_FAIL',
}

export default types

export const fetchMovie = id => ({
    type: types.START_FETCHING_MOVIE,
    id
})

export const fetchMovieSuccess = movie => ({
    type: types.FETCH_MOVIE_SUCCESS,
    movie
})

export const fetchMovieFailure = err => ({
    type: types.FETCH_MOVIE_FAIL,
    err
})