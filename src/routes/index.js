import { BrowserRouter, Route, Router, Switch } from "react-router-dom"
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Login from '../screens/Login'
import Search from '../screens/Search'
import Movie from '../screens/Movie'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact component={Login} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute path="/movie/:id" component={Movie} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter