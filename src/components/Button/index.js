const Button = ({fn, classes, children}) => (
    <button onClick={fn} className={`btn ${classes}`}>
        {children}
    </button>
)


export default Button
