import Navbar from '../../components/Navbar/'

const Header = () => {
    return (
        <header>
            <div className="flex justify-between content-container align-items-center">
                <div className="brand">Pick a Movie!</div>
                <Navbar />
            </div>
            
        </header>
    )
}

export default Header
