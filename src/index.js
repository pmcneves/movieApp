import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/'
import { loginSucessful } from './screens/Login/actions';
import configureStore from './store/configureStore'
import './styles/styles.scss'

const store = configureStore()

// persist login
const uid = localStorage.getItem('uid')
if (uid) {
    store.dispatch(loginSucessful(uid))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
