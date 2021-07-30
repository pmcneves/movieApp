import { BrowserRouter, Route, Router, Switch } from "react-router-dom"
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Login from '../screens/Login'
import Search from '../screens/Search'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact component={Login} />
                <PrivateRoute path="/search" component={Search} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter