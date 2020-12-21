import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import store from './store/index';
// import store from './app/store';

//allow us to use the store from any component in the app.
import { Provider } from 'react-redux';
import reducers from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

// to create store it takes three arguments (reducers, compose(applyMiddleware(thunk)))
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
   <React.StrictMode>
     <Provider store={store}>
      <App />
     </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();