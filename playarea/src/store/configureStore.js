/*
    NOTE: applyMiddleware help you to use any third party packages along with redux
*/
import { createStore, combineReducers, applyMiddleware } from 'redux'
import countReducer from '../reducer/count'
import usersReducer from '../reducer/user'
import thunk from 'redux-thunk'
const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        users: usersReducer
    }), applyMiddleware(thunk) )
    return store
}

export default configureStore