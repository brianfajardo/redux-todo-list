export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const DELETE_TODOS = 'DELETE_TODO'

export const addTodo = text => ({
    type: ADD_TODO,
    payload: text
})

export const deleteTodos = id => ({
    type: DELETE_TODOS,
    payload: id
})

export const toggleCompleted = id => ({
    type: TOGGLE_COMPLETED,
    payload: id
})

export const setFilter = filter => ({
    type: filter,
    payload: filter
})
