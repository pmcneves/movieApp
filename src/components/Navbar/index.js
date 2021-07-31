import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { startLogout } from '../../screens/Login/actions';
import Button from '../Button';


const Navbar = () => {
    const dispatch = useDispatch()

    const logOutHandler = () => {
        dispatch(startLogout())
    }

    return (
        <nav>
            <ul>
                <NavLink to="/favourites" className="navbar-item">Favourites</NavLink>
                <NavLink to="/search" className="navbar-item">Search</NavLink>
                <Button classes={'logout-btn'} fn={()=>logOutHandler()}>
                    Logout
                </Button>

            </ul>
        </nav>
    )
}

export default Navbar
