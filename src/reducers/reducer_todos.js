import React from 'react'

import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions/index'

const INITIAL_STATE = []
// Arbitrary ID generating method
let idCounter = 0

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.payload,
                    completed: false,
                    id: idCounter++
                }
            ]

        case DELETE_TODO:
            return state.filter(todo => todo.completed === false)

        case TOGGLE_COMPLETED:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })

        default:
            return state
    }
}