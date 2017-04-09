import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { toggleCompleted } from '../actions/index'

const Li = styled.li`
    margin-top: 10px
    font-size: 18px
    text-decoration: ${props => props.activateStyling ? 'line-through' : 'none'}
    color: ${props => props.activateStyling ? 'grey' : 'default'};

    &:hover {
        cursor: pointer
    }
`

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
                <ol>
                    {visibleTodos.map(todo => {
                        return (
                            <Li
                                key={todo.id}
                                onClick={() => this.props.toggleCompleted(todo.id)}
                                activateStyling={todo.completed}
                                onMouseDown={e => e.preventDefault()}
                            >
                                {todo.text}
                            </Li>
                        )
                    })}
                </ol>
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