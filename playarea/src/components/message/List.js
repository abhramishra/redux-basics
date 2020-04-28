import React from 'react'
import { connect } from 'react-redux'
import MessageForm from './Form'
import {removeMessage} from '../../action/message'
function MessageList(props) {
    const handleRemove = (id) => {
        props.dispatch(removeMessage(id))
    }
    return (
        <div>
            <h2>Message List</h2>
            <ul>
                {
                    props.messages.map(message => {
                        return (
                            <li key={message.id}>
                                { message.id } - { message.title }
                                <button onClick={() => { handleRemove(message.id) }}>remove</button>
                            </li>
                        )
                    })
                }
            </ul>
            <MessageForm />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(MessageList)