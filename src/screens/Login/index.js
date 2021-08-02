import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/Button"
import Loading from '../../components/Loading'
import { startLogin } from "./actions"
import googleLogo from '../../assets/logos/google.png'

const Login = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.auth)
    const loginHandler = () => {
        dispatch(startLogin())
    }

    return (
        <div className="flex justify-center login-layout">
            <div className="text-center box-container">
                <h1 className="box-title">Movie Time!</h1>
                <p className="login-subtitle">Search for your favourite movie!</p>
                <div className="flex justify-center">
                        {loading ? (
                            <p className="login-btn-container logging-in">Logging in...</p>
                        ) : (
                            <div className="flex login-btn-container">
                                <img src={googleLogo} className="login-btn-img" />
                                <Button 
                                    fn={loginHandler}
                                    classes={'login-btn'}>
                                    Sign in with Google
                                </Button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Login
