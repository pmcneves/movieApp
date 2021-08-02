import types from './actions'

const initialState = {
    searchValue:'',
    loading: false,
    movies: [],
    totalResults: '',
    responseError: '',
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
                responseError: '',
                loading: false,
                totalResults: action.dataFromApi.totalResults,
                movies: action.dataFromApi.Search
            }
        case types.FETCH_NO_RESPONSE:
            return {
                ...state,
                loading: false,
                responseError: action.errorFromApi
            }
        case types.FETCH_FAIL:
            return {
                ...state,
                loading: false,
                movies: [],
                error: {
                    name: action.err.name,
                    message: action.err.message,
                }
                
            }
        default:
            return state
    }
}

export default moviesReducer