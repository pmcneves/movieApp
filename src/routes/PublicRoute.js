import { useSelector } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PublicRoute = ({component: Component, ...rest}) => {
    const isAuthed = useSelector(state => state.auth.authed)

    return (
        <Route {...rest} component={props => (
            isAuthed ? (
                <Redirect to="/favourites"/> 
                ) : (
                <Component {...props}/>
                )
            )}
        />
    )
}

export default PublicRoute