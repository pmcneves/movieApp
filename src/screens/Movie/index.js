import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from '../../components/Button'
import Loading from "../../components/Loading"
import { fetchMovie } from "./actions"
import { useHistory } from "react-router-dom";
import { minToHours } from "./utils";
import goBackGrey from '../../assets/icons/icon-arrow-grey.svg';
import goBackWhite from '../../assets/icons/icon-arrow-white.svg';
import heartWhite from '../../assets/icons/icon-heart-white.svg'
import heartFull from '../../assets/icons/icon-heart-full.svg'
import imdbLogo from '../../assets/logos/logo-imdb.svg';
import rtLogo from '../../assets/logos/logo-rotten-tomatoes.svg';
import MovieSubtitle from "../../components/MovieSubtitle"
import { startAddFav } from "../Favourites/actions"


const Movie = ({match}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {loading} = useSelector (state => state.movieData)
    const {movie} = useSelector (state => state.movieData)  

    const goBack = () => history.goBack()

    const addToFavouritesHandler = movie => {
        dispatch(startAddFav(movie))
    }
    
    useEffect(  () => {
        dispatch(fetchMovie(match.params.imdbId))
    }, [])
    
    if(loading)
    return <Loading/>

    const {Runtime, Year, Rated, Title, imdbRating, Metascore, Plot, Actors, Genre, Director, Poster} = movie;  
    
    
    return (
        <div className="main-container movie-container">
            <div>
                <Button fn={goBack} classes={'go-back-btn'}>
                    <img 
                        alt="hover" 
                        src={goBackGrey} 
                        onMouseOver={e=>e.currentTarget.src=goBackWhite}
                        onMouseOut={e=>e.currentTarget.src=goBackGrey}/>
                </Button>
            </div>
            <section className="movie-section">
                <div className="left-card text-center ">
                    <div className="flex justify-center movie-info">
                        <p>{Runtime !== 'N/A' ? minToHours(Runtime) : 'N/A'}</p>
                        <p>{Year}</p>
                        <p>{Rated}</p>
                    </div>
                    <div className="movie-title">
                        <h1>{Title}</h1>
                    </div>
                    <div className="flex justify-center ratings">
                        <div className="rating">
                            <img className="rating-logo--imdb" src={imdbLogo} alt="imdb-logo"/>
                            <p className="rating-numbers">{imdbRating !== 'N/A' ? `${imdbRating}/10` : 'N/A'}</p>
                        </div>
                        <div className="rating">
                            <img className="rating-logo--rt" src={rtLogo} alt="rt-logo"/>
                            <p className="rating-numbers">{Metascore !== 'N/A' ? `${Metascore}%` : 'N/A'}</p>
                        </div>
                        <Button classes={'fav-btn'} fn={()=>addToFavouritesHandler(movie)}> 
                            <p>Add to favourites</p>
                            <img src={heartWhite} />
                        </Button> 
                    </div>
                    <div className="movie-plot">
                        <MovieSubtitle text="Plot" />
                        <p>{Plot}</p>
                    </div>
                    <div className="movie-cgd">
                        <div className="movie-cgd-subsection">
                            <MovieSubtitle text="Cast"/>
                            {Actors.map((actor) => <p key={actor}>{actor}</p>)}
                        </div>
                        <div className="movie-cgd-subsection">
                            <MovieSubtitle text="Genre" />
                            {Genre.map((genre) => <p key={genre}>{genre}</p>)}
                        </div>
                        <div className="movie-cgd-subsection">
                            <MovieSubtitle text={Director.length > 1 ? 'Directors': 'Director'}/>
                            {Director.map((director) => <p key={director}>{director}</p>)}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center right-card">
                    <img className="movie-poster" src={Poster} alt={`${Poster} Poster`}/>
                </div>
            </section>
        </div>
    )
}

export default Movie
