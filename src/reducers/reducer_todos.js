import React from 'react'

import ADD_TODO from '../actions/index'

const INITIAL_STATE = { todos: [] }
let idCounter = 0

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        text: action.data,
                        completed: false,
                        id: idCounter++
                    }
                ]
            }
        default:
            return state
    }
}