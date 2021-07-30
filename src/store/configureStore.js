import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import authReducer from '../screens/Login/reducer'
import moviesReducer from "../screens/Search/reducer"

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            moviesData: moviesReducer,
        }),
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(sagas)
    return store
}

export default configureStore