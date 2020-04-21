import React from 'react'
import { connect } from 'react-redux'

function UserShow(props) {
    return (
        <div>
            <h2>User Show page</h2>
            {
                props.user && (
                    <div>
                        <p>{ props.user.name } - { props.user.email }</p>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        user: state.users.find(user => user.id == id)
    }
}
export default connect(mapStateToProps)(UserShow)