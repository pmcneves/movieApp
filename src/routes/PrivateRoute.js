import { useSelector } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuthed = useSelector(state => state.auth.authed)
    return (
        <Route {...rest} component={props => (
            isAuthed ? (
                <Component {...props}/> 
            ) : (
                <Redirect to="/"/>
            )
        )}/> 
    )
}

export default PrivateRoute