import Navbar from '../../components/Navbar/'

const Header = () => {
    return (
        <header className="main-container header">
            <div className="flex justify-between align-items-center ">
                <div className="brand">Movie Time!</div>
                <Navbar />
            </div>
            
        </header>
    )
}

export default Header
