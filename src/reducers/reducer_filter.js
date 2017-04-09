import React from 'react'

import { SET_FILTER } from '../actions/index'

const INITIAL_STATE = 'DISPLAY_ALL'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DISPLAY_ALL':
            return action.payload

        case 'DISPLAY_COMPLETED':
            return action.payload

        case 'DISPLAY_NOT_COMPLETED':
            return action.payload

        default:
            return state
    }
}