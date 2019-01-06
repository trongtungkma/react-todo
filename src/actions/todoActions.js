import {
    ADD_TODO,
    DEL_TODO,
} from '../constants/actions'

export const createAddTodo = text => (
    {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            text,
        },
    }
)

export const createDelTodo = id => (
    {
        type: DEL_TODO,
        payload: {
            id,
        },
    }
)
