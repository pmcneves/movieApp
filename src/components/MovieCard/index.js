import { Link } from "react-router-dom"


const MovieCard = ({movie}) => {
    return (
        <div className={movie.Poster !== 'N/A' ? "movie-card__container" : "movie-card__container--NA"}>
                {movie.Poster !== 'N/A' ? <img src={movie.Poster} alt="movie poster" className="movie-card__poster"/> : 'Poster not available'}
                <Link to={`/movie/${movie.imdbID}`} >
                    <div className="movie-card__overlay">
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                </Link>
            </div>
    )
}

export default MovieCard
