// creating our own redux package and understanding the basic of redux
const configureStore = () => {
    const store = {
        state: {
            count: 0
        },
        getState: function() {  // to get the state value
            return this.state
        },
        dispatch: function(action) {    // dispatcher is responsible for updating state
            switch(action.type) {
                case 'INCREMENT': {
                    this.state.count += 1
                    break
                }
                case 'DECREMENT': {
                    this.state.count -= 1
                    break
                }
                case 'INCREMENT_BY': {
                    this.state.count += action.payload
                    break
                }
                default: {
                    store.state
                }
            }
        }
    }
    return store
}

const store = configureStore()
// console.log(store.state)
console.log(store.getState())

// action generator
const increment = () => {
    return { type: 'INCREMENT' }    // action - { type: 'INCREMENT' }
}
const decrement = () => {
    return { type: 'DECREMENT' }    // action - { type: 'DECREMENT' }
}
const incrementBy = (n) => {
    return { type: 'INCREMENT_BY', payload: n } // action - { type: 'INCREMENT_BY', payload: n }
}

store.dispatch(increment())
console.log(store.getState())

store.dispatch(increment())
console.log(store.getState())

store.dispatch(decrement())
console.log(store.getState())

store.dispatch(incrementBy(5))
console.log(store.getState())