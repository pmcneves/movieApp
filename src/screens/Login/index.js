import { useDispatch } from "react-redux"
import Button from "../../components/Button"
import { startLogin } from "./actions"

const Login = () => {
    const dispatch = useDispatch()

    const loginHandler = () => {
        dispatch(startLogin())
    }




    return (
        <div className="flex justify-center login-layout">
            <div className="text-center box-container">
                <h1 className="box-title">Movie App</h1>
                <p>Search for your favourite movie!</p>
                <Button fn={loginHandler}>
                    Login with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
