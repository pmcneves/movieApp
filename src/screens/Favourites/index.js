import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MovieCard from '../../components/MovieCard'
import Loading from "../../components/Loading"
import { startSetFav } from "./actions"
import FiltersBar from "../../containers/FiltersBar"
import { filteredFavourites } from "./selectors"

const Favourites = () => {
    const dispatch = useDispatch()
    const {loading, favourites, filters} = useSelector(state=>state.favouriteMovies)

    

    useEffect(() => {
        dispatch(startSetFav())
    }, [])

    if(loading) {
        return <Loading/>
    }

    return (
        <div className="main-container">
            {favourites.length >= 1 ? (
                <div>
                    <h1>Check out your favourite movies!</h1>
                    <FiltersBar/>
                    <section className="movie-cards-container">
                        {filteredFavourites(favourites, filters).map((movie) => <MovieCard movie={movie} key={movie.imdbID} showFavIcon={false}/>)}
                    </section>
                </div>
            ) : (
                <div className="no-favourites">
                    Oppss! You have no favourites. Search for your picks!
                </div>
            )}
            
        </div>
    )
}

export default Favourites
