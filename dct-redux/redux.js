// npm install redux
const { createStore, combineReducers } = require('redux')

// action creator / action generator
const increment = () => {
    return { type: 'INCREMENT' }
}
const decrement = () => {
    return { type: 'DECREMENT' }
}
const incrementBy = (n) => {
    return { type: 'INCREMENT_BY', payload: n }
}
const setTo = (n) => {
    return { type: 'SET_TO', payload: n }
}

// reducers are regular functions
const countReducer = (state = 0, action) => {
    console.log('Inside Reducer, state - ', state)
    switch(action.type) {
        case 'INCREMENT': {
            return state + 1
        }
        case 'DECREMENT': {
            return state - 1
        }
        case 'INCREMENT_BY': {
            return state += action.payload
        }
        case 'SET_TO': {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}

const configureStore = () => {
    console.log('Inside store')
    const store = createStore(combineReducers({
        count: countReducer
    }))
    return store
}
const store = configureStore()
console.log(store.getState())

store.dispatch(increment())
console.log(store.getState())

store.dispatch(increment())
console.log(store.getState())

store.dispatch(decrement())
console.log(store.getState())

store.dispatch(incrementBy(5))
console.log(store.getState())

store.dispatch(setTo(10))
console.log(store.getState())

