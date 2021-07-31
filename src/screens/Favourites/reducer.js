import types from "./actions"


const initialState = {
    loading: true,
    favourites: [],
    filters: {
        loadingFilters: false,
        title: '',
        genre: '',
        language: '',
        sortBy: '',
        hasAwardsChecked: false,
    },
    error: {
        name: '',
        message: '',
    }
}

const favReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.START_ADD_FAV:
            return {
                ...state,
                loading: true,
            }
        case types.ADD_FAV_SUCCESS:
            return {
                ...state,
                loading: false,
                favourites: [
                    ...state.favourites,
                    action.movie
                ]
            }
        case types.ADD_FAV_FAIL:
            return {
                ...state,
                loading: false,
                error: {
                    name: action.err.name,
                    message: action.err.message,
                }
            }
        case types.START_SET_FAV:
            return {
                ...state,
                loading: true,
            }
        case types.SET_FAV_SUCCESS:
            return {
                ...state,
                loading: false,
                favourites: action.favourites,
            }
        case types.SET_FAV_FAIL:
            return {
                ...state,
                loading: false,
                error: {
                    name: action.err.name,
                    message: action.err.message,
                }
            }
        case types.START_SET_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    loadingFilters: true,
                }
            }
        case types.SET_TEXT_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    loadingFilters: false,
                    title: action.title
                }
            };
        case types.SET_GENRE_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    loadingFilters: false,
                    genre: action.genre
                }
            }
        case types.SET_LANGUAGE_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    loadingFilters: false,
                    language: action.language,
                }
            }
        case types.SET_HAS_AWARDS_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    loadingFilters: false,
                    hasAwardsChecked: !state.filters.hasAwardsChecked,
                }
            }
        case types.SET_SORT_BY_YEAR_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    loadingFilters: false,
                    sortBy: 'year',
                }
            }
        case types.SET_SORT_BY_RATING_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    loadingFilters: false,
                    sortBy: 'imdbRating',
                }
            }
        default:
            return state
    }
}

export default favReducer