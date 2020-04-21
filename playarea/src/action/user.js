/*
    NOTE: Whenever you need to go to the server to get the data or to perform any of the CRUD operation, there will be two action generator
*/

import axios from 'axios'
const setUser = (users) => {
    console.log('came')

    return {
        type: 'SET_USER', payload: users
    }
}

export const startSetUser = () => {
    return (dispatch) => {      // thunk is making available dispatch method in this action generator
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
                const users = res.data
                dispatch(setUser(users))
            })
    }
}