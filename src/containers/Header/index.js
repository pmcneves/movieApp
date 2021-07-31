import Navbar from '../../components/Navbar/'

const Header = () => {
    return (
        <header className="main-container">
            <div className="flex justify-between align-items-center ">
                <div className="brand">Pick a Movie!</div>
                <Navbar />
            </div>
            
        </header>
    )
}

export default Header
