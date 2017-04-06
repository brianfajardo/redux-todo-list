import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => <li>{todo.text}</li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)