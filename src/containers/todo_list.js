import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleCompleted } from '../actions/index'

class TodoList extends Component {
    // Will filter todos array by app state filter on this.props
    getTodosByFilter(todos, filter) {
        switch (filter) {
            case 'DISPLAY_ALL':
                return todos
            case 'DISPLAY_COMPLETED':
                return todos.filter(todo => todo.completed === true)
            case 'DISPLAY_NOT_COMPLETED':
                return todos.filter(todo => todo.completed === false)
        }
    }

    render() {
        const visibleTodos = this.getTodosByFilter(this.props.todos, this.props.filter)

        return (
            <div>
                <ul>
                    {visibleTodos.map(todo => {
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
        todos: state.todos,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleCompleted }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)