const messageInitialState = [
    { id: Date.now(), title: 'message 1'  }
]
const messageReducer = (state = messageInitialState, action) => {
    switch(action.type) {
        case 'SET_MESSAGE': {
            return [].concat(state,action.payload)
        }
        case 'REMOVE_MESSAGE': {
            return state.filter(message => message.id != action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default messageReducer