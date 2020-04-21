/*
 NOTE: react-redux will ensure that redux store will be available to all the components and we achive that with the help of Provider component
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
// import {increment} from '../src/action/count'
// import {startSetUser} from '../src/action/user'
const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(startSetUser())

const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
    jsx,  document.getElementById('root')
);

