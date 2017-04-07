import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleCompleted } from '../actions/index'

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => {
                        return (
                            <li
                                key={todo.id}
                                onClick={() => this.props.toggleCompleted(todo.id)}
                                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                onMouseDown={e => e.preventDefault()}
                            >
                                {todo.text}
                            </li>
                        )
                    })}
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleCompleted }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)