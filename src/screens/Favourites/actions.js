const types = {
    START_ADD_FAV: 'START_ADD_FAV',
    ADD_FAV_SUCCESS: 'ADD_FAV_SUCCESS',
    ADD_FAV_FAIL: 'ADD_FAV_FAIL',
    START_SET_FAV: 'START_SET_FAV',
    SET_FAV_SUCCESS: 'SET_FAV_SUCCESS',
    SET_FAV_FAIL: 'SET_FAV_FAIL',
    START_SET_FILTERS: 'START_SET_FILTERS',
    SET_TEXT_FILTER: 'SET_TEXT_FILTER',
    SET_GENRE_FILTER: 'SET_GENRE_FILTER',
    SET_LANGUAGE_FILTER: 'SET_LANGUAGE_FILTER',
    SET_HAS_AWARDS_FILTER: 'SET_HAS_AWARDS_FILTER',
    SET_SORT_BY_YEAR_FILTER: 'SET_SORT_BY_YEAR_FILTER',
    SET_SORT_BY_RATING_FILTER: 'SET_SORT_BY_RATING_FILTER',
}

export default types

// add movie to favourites
export const startAddFav = favMovie => ({
    type: types.START_ADD_FAV,
    favMovie
})

export const addFavSuccess = movie => ({
    type: types.ADD_FAV_SUCCESS,
    movie
})

export const addMovieFailure = err => ({
    type: types.ADD_FAV_FAIL,
    err
})

// set favourites movies on load
export const startSetFav = () => ({
    type: types.START_SET_FAV
})

export const setFavSuccess = favourites => ({
    type: types.SET_FAV_SUCCESS,
    favourites
})

export const setFavFail = err => ({
    type: types.SET_FAV_FAIL,
    err
})



//////// FILTERS

export const startFilters = filterObj => ({
    type: types.START_SET_FILTERS,
    filterObj
})

// title
export const setTextFilters = title => ({
    type: types.SET_TEXT_FILTER,
    title
  });

// genre
export const setGenre = genre => ({
    type: types.SET_GENRE_FILTER,
    genre
})

// language
export const setLanguage = language => ({
    type: types.SET_LANGUAGE_FILTER,
    language
})

// awards
export const hasAwardsChecked = () => ({
    type: types.SET_HAS_AWARDS_FILTER,
});

// sort by year
export const sortByYear = () => ({
    type: types.SET_SORT_BY_YEAR_FILTER,
});

// sort by rating
export const sortByRating = () => ({
    type: types.SET_SORT_BY_RATING_FILTER,
});