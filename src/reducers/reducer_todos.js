import React from 'react'

import { ADD_TODO } from '../actions/index'

const INITIAL_STATE = []
// Arbitrary ID generating method
let idCounter = 0

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    id: idCounter++,
                    completed: false
                }
            ]

        default:
            return state
    }
}