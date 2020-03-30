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
    switch(action.type) {
        case 'INCREMENT': {
            return state + 1
        }
        case 'DECREMENT': {
            return state - 1
        }
        case 'INCREMENT_BY': {
            return state + action.payload
        }
        case 'SET_TO': {
            return state = action.payload
        }
        default: {
            return state
        }
    }
}

const addEmployee = (emp) => {
    return { type: 'ADD_EMPLOYEE', payload: emp}
}
const removeEmployee = (empId) => {
    return { type: 'REMOVE_EMPLOYEE', payload: empId }
}
const updateEmployee = (empId, obj) => {
    return { type: 'UPDATE_EMPLOYEE', payload: {
        empId,
        obj
    } }
}

employeesInitialState = []
const employeesReducer = (state = employeesInitialState, action) => {
    switch(action.type) {
        case 'ADD_EMPLOYEE': {
            return state.concat(action.payload)
        }
        case 'UPDATE_EMPLOYEE': {
            return state.map(emp => {
                if(emp.id == action.payload.empId) {
                    return Object.assign(emp, action.payload.obj)
                } else {
                    return Object.assign({}, emp)
                }
            })
        }
        case 'REMOVE_EMPLOYEE': {
            return state.filter(emp => emp.id != action.payload)
        }
        default: {
            return state
        }
    }
}

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        employees: employeesReducer
    }))
    return store
}

const store = configureStore()
// console.log(store.getState())

// subscribe method will call whenever state will update
store.subscribe(() => {
    console.log(store.getState())
})
/*
store.dispatch(increment())

store.dispatch(increment())

store.dispatch(decrement())

store.dispatch(incrementBy(5))

store.dispatch(setTo(10))
*/
store.dispatch(addEmployee({ id: 1, name: 'Employee1' }))
store.dispatch(addEmployee({ id: 2, name: 'Employee2' }))

// list all the employees
console.log('List employees - ',store.getState().employees)

// show particular employee
console.log('Employee Show - ', store.getState().employees.find(emp => emp.id == 1))

// update employee
store.dispatch(updateEmployee(1,{ id: 1, name: 'Abhra' }))

// remove employee
store.dispatch(removeEmployee(2))
console.log('List employees - ',store.getState().employees)

