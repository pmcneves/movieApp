import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input'
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';
import { fetchMovies } from './actions';

const Search = () => {
    const dispatch = useDispatch();
    const {movies, totalResults, responseError} = useSelector(state=>state.moviesData)
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('')
    const [search, setSearch] = useState('')

    //pagination
    const totalNumberOfPages = Math.ceil(totalResults / 10)
    const selectPage = pageNumber => {
        setCurrentPage(pageNumber)
    }


    // Search for movies
    const searchMovies = e => {
        e.preventDefault()
        if(searchValue !== '') {
            setSearch(searchValue);
        } 
    }

    // Fetch movies
    useEffect(() => {
        if(search !== '') {
            const searchData = {
                search,
                currentPage
            }
            dispatch(fetchMovies(searchData))
        }
    }, [search, currentPage])

    // error message
    let errorMessage = ''
    if (responseError === 'Movie not found!') {
        errorMessage = 'Oppss... Movie not found! Insert a valid name'
    } else {
        errorMessage = 'Oppss... Too many results! Be more specific :)'
    }

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
                {responseError && <p className="error">{errorMessage}</p>}
                {!responseError && totalNumberOfPages > 1 && <Pagination selectPage={selectPage} totalNumberOfPages={totalNumberOfPages} currentPage={currentPage}/>}
                {!responseError && <section className="movie-cards-container">
                    {movies.length > 0 && movies.map( (movie, i) => <MovieCard key={i} movie={movie}/> )}
                </section>}
            </div>
        </div>
    )
}

export default Search
