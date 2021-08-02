const BurgerIcon = ({burgerIconHandler, isBurgerIconToggled}) => {

    let change
    if(isBurgerIconToggled) {
        change = 'change'
    } else {
        change = ''
    }

    return (
        <div className={`burger-container ${change}`} onClick={burgerIconHandler}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default BurgerIcon
