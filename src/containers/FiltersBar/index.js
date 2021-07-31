import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button";
import Input from "../../components/Input";
import { startFilters } from "../../screens/Favourites/actions";
import { displayGenres, displayLanguages } from "../../screens/Favourites/selectors";

const FiltersBar = () => {
    const dispatch = useDispatch();
    const {filters, favourites} = useSelector(state=>state.favouriteMovies)
    const [filtersVisibility, setFiltersVisibility] = useState(false)
    const [visibleClass, setVisibleClass] = useState('')


    //show/hide more filters
    const showFiltersHandler = () => {
        setFiltersVisibility(!filtersVisibility)
        if (!filtersVisibility) {
            setVisibleClass('visible');
        } else {
            setVisibleClass('')
        }
    }

    const filtersHandler = (filterType, data) => {
        const filterObj = {
            filterType,
            data,
        }
        dispatch(startFilters(filterObj))
    }

    return (
        <div>
            <div className="flex  align-items-center filters">
                <Input
                    classes={'filters-title'}
                    placeholder='Filter by name...' 
                    value={filters.title} 
                    changeFn={e=>filtersHandler('title', e.target.value )}
                />
                <div className="flex">
                    <p>Sort by:</p>
                    <select onChange={e=>filtersHandler('sortBy', e.target.value)} value={filters.sortBy}>
                        <option value="year">Year</option>
                        <option value="imdbRating">imdb Rating</option>
                    </select>
                </div>
                <div>
                    <Button fn={showFiltersHandler}>
                        More filters
                    </Button>
                </div>
            </div>
            <ol id="favourite-filters__toggle" className={visibleClass}>
                <li >
                    <label>Only show awarded/mominated movies:</label>
                    <input type="checkbox" value={filters.hasAwardsChecked} onClick={()=>filtersHandler('awards')}/>
                </li>
                <li>
                    <select onChange={e=>filtersHandler('genre', e.target.value)}>
                        <option value="">Select</option>
                        {displayGenres(favourites)}
                    </select> 
                </li>
                <li>
                    <select onChange={e=>filtersHandler('language', e.target.value)}>
                        <option value="">Select</option>
                        {displayLanguages(favourites)}
                    </select>
                </li>
            </ol>
        </div>
    )
}

export default FiltersBar
