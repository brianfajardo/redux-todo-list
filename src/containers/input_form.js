import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/index'

class InputForm extends Component {
    constructor(props) {
        super(props)

        this.state = { inputText: '' }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(e) {
        // Event handlers are are passed as instances of `SyntheticEvent`
        // The SyntheticEvent object will be reused and all properties will be nullified after the event callback has been invoked
        // Therefore, console.log(e) will show values of null
        // event.persist() allow references to the event to be retained by user code
        e.persist()
        // console.log(e)
        this.setState({ inputText: e.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.addTodo(this.state.inputText)
        this.setState({ inputText: '' })
    }

    render() {
        return (
            <form
                className='input-group'
                onSubmit={this.onFormSubmit}>
                <input
                    type='text'
                    value={this.state.inputText}
                    onChange={this.onInputChange}
                    className='form-control'
                    placeholder='Add something to do!' />
                <span className='input-group-btn'>
                    <button
                        type='submit'
                        className='btn btn-primary'>
                        Add Todo
                    </button>
                </span>
            </form>
        )
    }
}

export default connect(null, { addTodo })(InputForm)