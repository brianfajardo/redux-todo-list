import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setFilter, deleteTodo } from '../actions/index'

class Footer extends Component {
    render() {
        return (
            <div>
                {/*If there are no todos, hide filters*/}
                {this.props.todos.length > 0 && (
                    <div>
                        <p>Filter:
                            <a
                                onClick={() => { this.props.setFilter('DISPLAY_ALL') }}
                                style={{ color: this.props.filter === 'DISPLAY_ALL' ? 'red' : 'black' }}
                            >
                                All
                            </a>

                            <a
                                onClick={() => { this.props.setFilter('DISPLAY_COMPLETED') }}
                                style={{ color: this.props.filter === 'DISPLAY_COMPLETED' ? 'red' : 'black' }}
                            >
                                Completed
                            </a>

                            <a
                                onClick={() => { this.props.setFilter('DISPLAY_NOT_COMPLETED') }}
                                style={{ color: this.props.filter === 'DISPLAY_NOT_COMPLETED' ? 'red' : 'black' }}
                            >
                                Not Completed
                            </a>
                        </p>
                        <button
                            type='button'
                            onClick={() => this.props.deleteTodo()}
                            className='btn btn-sm btn-danger'
                        >
                            Clear Completed</button>
                    </div>
                )}
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
    return bindActionCreators({ setFilter, deleteTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)