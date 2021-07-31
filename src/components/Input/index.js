const Input = ({value, changeFn, classes, placeholder}) => (
    <input
        className={classes} 
        type="text"
        value={value}
        onChange={changeFn}
        placeholder={placeholder}
    />
)


export default Input
