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

const mapStateToPropos = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToPropos)(Home)