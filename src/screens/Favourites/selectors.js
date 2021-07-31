export const currentUserId = state => state.auth.activeUid

export const displayLanguages = favourites => {
    let categories = [];
    favourites.forEach(movie => {
        movie.Language.forEach(language => {
            if (!categories.includes(language)) {
                categories.push(language)
            }
        })
    })
    return categories.map (language => <option key={language} value={language}>{language}</option>)
}

export const displayGenres = favourites => {
    let categories = []
    favourites.forEach(movie => {
        movie.Genre.forEach(genre => {
            if(!categories.includes(genre)) {
                categories.push(genre)
            } 
        })
    })
    return categories.map(genre => <option key={genre} value={genre}>{genre}</option>)
}