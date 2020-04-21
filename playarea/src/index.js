import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import configureStore from './store/configureStore'
import {increment} from '../src/action/count'
const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(increment())
store.dispatch(increment())

ReactDOM.render(
    <App />,  document.getElementById('root')
);

