const Input = ({submitFn, value, changeFn, classes}) => {
    return (
        <div>
            <form onSubmit={submitFn}>
                <input
                    className={classes} 
                    type="text"
                    value={value}
                    onChange={e=>changeFn(e.target.value)}
                    placeholder='Search movies...'
                />
                
            </form>
        </div>
    )
}

export default Input
