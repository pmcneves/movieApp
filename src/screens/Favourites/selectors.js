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

export const filteredFavourites = (favourites, {title, sortBy, hasAwardsChecked, genre, language}) => {
    return favourites.filter( movie => {
        //title - case insensitive
        const titleMatch = movie.Title.toLowerCase().includes(title.toLowerCase());

        //awards
        let awards = true;
        if (hasAwardsChecked) {
            awards = !movie.Awards.includes('N/A')
        }

        //genre
        let genreMatch = true // empty string passa a true e mostra todos
        if(genre) {
            genreMatch = movie.Genre.includes(genre)
        }

        //language
        let languageMatch = true;
        if (language) {
            languageMatch = movie.Language.includes(language)
        }

        return titleMatch && awards && genreMatch && languageMatch
    }).sort((a, b) => {
        //sorting by rating and year (highest to lowest)
        if (sortBy === 'imdbRating') {
            return a.imdbRating < b.imdbRating ? 1 : -1
        } else if (sortBy ==='year') {
            return a.Year < b.Year ? 1 : -1
        } 
    })
}