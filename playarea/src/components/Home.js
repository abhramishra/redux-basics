/*
    NOTE: 
     connect - using connect I have the ability to get access of dispatch method within the component
     mapStateToProps - Whatever value we are returning via object from mapStateToProps will be available to me via props within my component
     - within your component if you need the state value then use mapStateTo Props
*/

import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../action/count';

function Home(props) {
    console.log("props-", props)
    return (
        <div>
            <h4>This is Home component</h4>
            <h3>{ props.count }</h3>
            <button onClick={() => {
                props.dispatch(increment())
            }}>UP</button>
        </div>
    )
}

// To read the value of a store within a component we use mapStateToProps
const mapStateToPropos = (state) => {
    // Whatever value we are returning via object from mapStateToProps will be available to me via props within my component
    return {
        count: state.count  
    }
}

export default connect(mapStateToPropos)(Home)

// connect is a higher order component (functiom), it is returning a function amd it is calling that returned function and also passing the component as an argument to that function