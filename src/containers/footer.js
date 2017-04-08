import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setFilter } from '../actions/index'

class Footer extends Component {
    render() {
        return (
            <div>
                {/*If there are no todos, hide filters*/}
                {this.props.todos.length > 0 && (
                    <div>
                        <p>Filter:
                            <a onClick={e => { this.props.setFilter('DISPLAY_ALL') }}>
                                All
                            </a>
                            <a onClick={e => { this.props.setFilter('DISPLAY_COMPLETED') }}>
                                Completed
                            </a>
                            <a onClick={e => { this.props.setFilter('DISPLAY_NOT_COMPLETED') }}>
                                Not Completed
                            </a>
                        </p>
                    </div>
                )}
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
    return bindActionCreators({ setFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)