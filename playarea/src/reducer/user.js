const usersInitialState = []
const usersReducer = (state = usersInitialState, action) => {
    switch(action.type) {
        case 'SET_USER': {
            return [].concat(action.payload)    // [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default usersReducer