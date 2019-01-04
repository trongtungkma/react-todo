import { ADD_TODO } from '../constants/actions'

export const createAddTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            key: Date.now(),
            text
        }
    }
}