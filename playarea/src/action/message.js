export const setMessage = (message) => {
    return {
        type: 'SET_MESSAGE',
        payload: message
    }
}

export const removeMessage = (id) => {
    return {
        type: 'REMOVE_MESSAGE',
        payload: id
    }
}