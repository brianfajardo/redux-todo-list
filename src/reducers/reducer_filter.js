import { SET_FILTER } from '../actions/index'

const INITIAL_STATE = 'All'

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.payload

        default:
            return state
    }
}