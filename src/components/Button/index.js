const Button = ({fn, classes, children}) => (
    <button onClick={fn} className={classes}>
        {children}
    </button>
)


export default Button
