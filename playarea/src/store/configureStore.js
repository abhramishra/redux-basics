import { createStore, combineReducers } from 'redux'
import countReducer from '../reducer/count'
const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer
    }))
    return store
}

export default configureStore