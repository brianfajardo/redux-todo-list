export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const SET_FILTER = 'SET_FILTER'

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export function toggleCompleted(id) {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        payload: filter
    }
}