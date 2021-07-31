import { Link } from "react-router-dom"
import heartWhite from '../../assets/icons/icon-heart-white.svg'
import heartFull from '../../assets/icons/icon-heart-full.svg'


const MovieCard = ({movie, showFavIcon= true}) => {

    let favButton = heartWhite

    return (
        <div className={movie.Poster !== 'N/A' ? "movie-card-container" : "movie-card-container--NA"}>
            {movie.Poster !== 'N/A' ? <img src={movie.Poster} alt={`${movie.Title}-poster`} className="movie-card-poster" /> : 'Poster not available'}
            <Link to={`/movie/${movie.imdbID}`} >
                <div className="movie-card-overlay">
                    {showFavIcon && (
                        <img 
                            className={favButton !== heartFull ? "movie-fav-icon" : undefined}
                            alt="favIcon"
                            src={favButton}
                        />
                    )}
                    <div>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
