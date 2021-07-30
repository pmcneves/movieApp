import { useSelector } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from '../containers/Header'

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuthed = useSelector(state => state.auth.authed)
    return (
        <Route {...rest} component={props => (
            isAuthed ? (
                <div>
                    <Header />
                    <Component {...props}/> 
                </div>
            ) : (
                <Redirect to="/"/>
            )
        )}/> 
    )
}

export default PrivateRoute