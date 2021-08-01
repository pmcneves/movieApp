import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/'
import { startSetFav } from './screens/Favourites/actions';
import { loginSucessful } from './screens/Login/actions';
import configureStore from './store/configureStore'
import './styles/styles.scss'

const store = configureStore()

// persist login
const uid = localStorage.getItem('uid')
// const favourites = localStorage.getItem('favourites')
if (uid) {
    store.dispatch(loginSucessful(uid))
    store.dispatch(startSetFav())
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
