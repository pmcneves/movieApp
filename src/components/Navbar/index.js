import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { startLogout } from '../../screens/Login/actions';
import Button from '../Button';


const Navbar = ({showLinks}) => {
    const dispatch = useDispatch()

    const logOutHandler = () => {
        dispatch(startLogout())
    }

    return (
        <div className='navbar-links'>
            <ul>
                <NavLink to="/favourites" className="navbar-item">Favourites</NavLink>
                <NavLink to="/search" className="navbar-item">Search</NavLink>
                <Button classes={'logout-btn'} fn={()=>logOutHandler()}>
                    Logout
                </Button>

            </ul>
        </div>
    )
}

export default Navbar
