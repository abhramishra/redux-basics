import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function List(props) {
    return (
        <div>
            <h2>Users List - {props.users.length}</h2>
            <ul>
                {
                    props.users.map(user => {
                        return (
                            <li key={user.id}><Link to={`/user/${user.id}`}>{ user.name }</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(List)
