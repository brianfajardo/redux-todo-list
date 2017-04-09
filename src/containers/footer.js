import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { setFilter, deleteTodos } from '../actions/index'

const Li = styled.li`
    margin-left: 15px
    list-style: none
    display: inline
    cursor: pointer
    font-weight: ${props => props.activateStyling ? 'bold' : 'default'}
    font-size: ${props => props.activateStyling ? '1.2rem' : 'default'}
    color: ${props => props.activateStyling ? 'green' : 'default'}
`

const Div = styled.div`
    text-align: center
`

class Footer extends Component {
    render() {
        return (
            <div>
                {/*If there are no todos, hide filters*/}
                {this.props.todos.length > 0 && (
                    <Div>
                        <ul>
                            Filter:
                            <Li
                                onClick={() => { this.props.setFilter('DISPLAY_ALL') }}
                                activateStyling={this.props.filter === 'DISPLAY_ALL'}
                            >
                                All
                            </Li>
                            <Li
                                onClick={() => { this.props.setFilter('DISPLAY_COMPLETED') }}
                                activateStyling={this.props.filter === 'DISPLAY_COMPLETED'}
                            >
                                Completed
                            </Li>
                            <Li
                                onClick={() => { this.props.setFilter('DISPLAY_NOT_COMPLETED') }}
                                activateStyling={this.props.filter === 'DISPLAY_NOT_COMPLETED'}
                            >
                                Not Completed
                            </Li>
                        </ul>
                        <button
                            type='button'
                            onClick={() => this.props.deleteTodos()}
                            className='btn btn-sm btn-danger'
                        >
                            Clear Completed
                        </button>
                    </Div>
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
    return bindActionCreators({ setFilter, deleteTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)