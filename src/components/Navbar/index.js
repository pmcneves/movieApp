import {NavLink} from 'react-router-dom';
import Button from '../Button';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/profile" className="navbar-item">Profile</NavLink>
                <NavLink to="/search" className="navbar-item">Search</NavLink>
                <Button>
                    Logout
                </Button>

            </ul>
        </nav>
    )
}

export default Navbar
