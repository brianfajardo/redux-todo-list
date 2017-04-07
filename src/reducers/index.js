import { combineReducers } from 'redux'

import todos from './reducer_todos'
import filter from './reducer_filter'

const rootReducer = combineReducers({
    todos,
    filter
})

export default rootReducer
