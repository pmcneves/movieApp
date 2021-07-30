import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input'
import MovieCard from '../../components/MovieCard';
import { fetchMovies } from './actions';
import { moviesSelector } from './selectors';

const Search = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state=>state.moviesData)
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
        <div>
            <div className="text-center">
                <Input
                    submitFn={searchMovies}
                    value={searchValue}
                    changeFn={setSearchValue} 
                    classes={'search-bar'}
                />
                <section className="flex justify-center align-center movie-cards-container">
                    {movies.map( (movie, i) => <MovieCard key={i} movie={movie}/> )}
                </section>
            </div>
        </div>
    )
}

export default Search
