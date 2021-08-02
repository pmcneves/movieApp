import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input'
import MovieCard from '../../components/MovieCard';
import { fetchMovies } from './actions';

const Search = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state=>state.moviesData)
    // const {loading} = useSelector(state=>state.moviesData)
    const [searchValue, setSearchValue] = useState('')
    const [search, setSearch] = useState('')


    // Search for movies
    const searchMovies = e => {
        e.preventDefault()
        if(searchValue !== '') {
            setSearch(searchValue);
        } 
    }

    // Fetch movies
    useEffect(() => {
        if(search !== '')
            dispatch(fetchMovies(search))
    }, [search])

    return (
        <div className="main-container">
            <div>
                <form onSubmit={searchMovies} className="text-center">
                    <Input
                        value={searchValue}
                        changeFn={e=>setSearchValue(e.target.value)} 
                        classes={'search-bar'}
                        placeholder={'Search movies...'}
                    />

                </form>
                <section className="movie-cards-container">
                    {movies.map( (movie, i) => <MovieCard key={i} movie={movie}/> )}
                </section>
            </div>
        </div>
    )
}

export default Search
