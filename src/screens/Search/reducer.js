import types from './actions'

const initialState = {
    searchValue:'',
    loading: false,
    movies: [],
    error:''
}

const moviesReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.START_FETCHING:
            return {
                ...state,
                loading: true,
                searchValue: action.searchValue,
            }
        case types.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.movies
            }
        case types.FETCH_FAIL:
            return {
                ...state,
                loading: false,
                movies: [],
                error: action.err
                
            }
        default:
            return state
    }
}

export default moviesReducer