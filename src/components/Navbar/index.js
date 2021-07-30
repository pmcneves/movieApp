import {NavLink} from 'react-router-dom';
import Button from '../Button';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/profile" className="navbar-item" activeClassName="selected">Profile</NavLink>
                <NavLink to="/movieapp" className="navbar-item" activeClassName="selected">Search</NavLink>
                <Button>
                    Logout
                </Button>

            </ul>
        </nav>
    )
}

export default Navbar
