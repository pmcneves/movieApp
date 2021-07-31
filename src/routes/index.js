import { BrowserRouter, Switch } from "react-router-dom"
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Login from '../screens/Login'
import Search from '../screens/Search'
import Movie from '../screens/Movie'
import Favourites from '../screens/Favourites'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact component={Login} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute path="/favourites" component={Favourites} />
                <PrivateRoute path="/movie/:imdbId" component={Movie} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter