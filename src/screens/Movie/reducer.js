import types from "./actions"


const initialState = {
    loading: true,
    movie: {},
    error: ''
}

const movieReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.START_FETCHING_MOVIE:
            return {
                ...state,
                loading: true,
            }
        case types.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: action.movie
            }
        case types.FETCH_MOVIE_FAIL:
            return {
                ...state,
                loading: false,
                error: {
                    name: action.err.name,
                    message: action.err.message,
                }
                
            }
        default:
            return state
    }
}

export default movieReducer