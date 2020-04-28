import React from 'react'
import { connect } from 'react-redux'
import {setMessage} from '../../action/message'
class MessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Date.now(),
            title: this.state.message
        }
        this.state.message ? this.props.dispatch(setMessage(formData)) : alert('Please enter message')
    }
    render() {
        return (
            <div>
                <h2>Add message</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="message">Message</label><br/>
                    <textarea id="message" name="message" placeholder="Write your message here" onChange={this.handleChange}/><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(MessageForm)