export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

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
        type: filter,
        payload: filter
    }
}