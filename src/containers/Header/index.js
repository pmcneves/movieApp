import { useState } from 'react'
import BurgerIcon from '../../components/BurgerIcon'
import Navbar from '../../components/Navbar/'

const Header = () => {
    const [isBurgerIconToggled, setIsBurgerIconToggled] = useState(false)
    const [showLinks, setShowLinks] = useState(false)

    const burgerIconHandler = () => {
        setIsBurgerIconToggled(!isBurgerIconToggled)
        setShowLinks(!showLinks)
    }

    return (
        <header className="main-container header">
            <div className="flex justify-between align-items-center" >
                <div className="brand">Movie Time!</div>
                <nav>
                    <Navbar showLinks={showLinks}/>
                    {/* <BurgerIcon burgerIconHandler={burgerIconHandler} isBurgerIconToggled={isBurgerIconToggled}/> */}
                </nav>
            </div>
            
        </header>
    )
}

export default Header
