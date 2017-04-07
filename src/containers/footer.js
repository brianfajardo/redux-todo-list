import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setFilter } from '../actions/index'

class Footer extends Component {
    render() {
        return (
            <div>
                {this.props.todos.length > 0 && (
                    <div>
                        <p>Filter:
                            <a
                                href='#'
                                filter='ALL'
                                onClick={() => setFilter(filter)}
                            >
                                All
                            </a>
                            <a
                                href='#'
                                filter='COMPLETED'
                                onClick={() => setFilter(filter)}
                            >
                                Completed
                            </a>
                            <a
                                href='#'
                                filter='NOT_COMPLETED'
                                onClick={() => setFilter(filter)}
                            >
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
        todos: state.todos,
        activefilter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)