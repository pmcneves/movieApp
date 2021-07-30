import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from '../../components/Button'
import Loading from "../../components/Loading"
import { fetchMovie } from "./actions"
import { useHistory } from "react-router-dom";
import { minToHours } from "./utils";
import goBackGrey from '../../assets/icons/icon-arrow-grey.svg';
import goBackWhite from '../../assets/icons/icon-arrow-white.svg';
import imdbLogo from '../../assets/logos/logo-imdb.svg';
import rtLogo from '../../assets/logos/logo-rotten-tomatoes.svg';


const Movie = ({match}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {loading} = useSelector (state => state.movieData)
    const {movie} = useSelector (state => state.movieData)  

    const goBack = () => history.goBack()
    
    useEffect(  () => {
        dispatch(fetchMovie(match.params.imdbId))
    }, [])
    
    if(loading)
    return <Loading/>

    const {Runtime, Year, Rated, Title, imdbRating, Metascore, Plot, Actors, Genre, Director, Poster} = movie;  
    
    
    return (
        <section>
            <div>
                <Button onClick={goBack}>
                    <img 
                        alt="hover" 
                        src={goBackGrey} 
                        onMouseOver={e=>e.currentTarget.src=goBackWhite}
                        onMouseOut={e=>e.currentTarget.src=goBackGrey}/>
                </Button>
            </div>
            <div>
                <div>
                    <div>
                        <p>{Runtime !== 'N/A' ? minToHours(Runtime) : 'N/A'}</p>
                        <p>{Year}</p>
                        <p>{Rated}</p>
                    </div>
                    <div>
                        <h1>{Title}</h1>
                    </div>
                    <div>
                        <div>
                            <img src={imdbLogo} alt="imdb-logo"/>
                            <p>{imdbRating !== 'N/A' ? `${imdbRating}/10` : 'N/A'}</p>
                        </div>
                        <div>
                            <img src={rtLogo} alt="rt-logo"/>
                            <p>{Metascore !== 'N/A' ? `${Metascore}%` : 'N/A'}</p>
                        </div>
                        <button> 
                            lol
                        </button> 
                    </div>
                    <div>
                        <h3>Plot</h3>
                        <p>{Plot}</p>
                    </div>
                    <div>
                        <div>
                            <h3>Cast</h3>
                            {Actors.map((actor) => <p key={actor}>{actor}</p>)}
                        </div>
                        <div>
                            <h3>Genre</h3>
                            {Genre.map((genre) => <p key={genre}>{genre}</p>)}
                        </div>
                        <div>
                            <h3>{Director.length > 1 ? 'Directors': 'Director'}</h3>
                            {Director.map((director) => <p key={director}>{director}</p>)}
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Poster} alt={`${Poster} Poster`}/>
                </div>
            </div>
        </section>
    )
}

export default Movie
