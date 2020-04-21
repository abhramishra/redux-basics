import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
// import {increment} from '../src/action/count'
const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(increment())
// store.dispatch(increment())

const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
    jsx,  document.getElementById('root')
);

