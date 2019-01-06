import { createInitialState } from '../utils/createInitialState'
import { ADD_TODO, DEL_TODO } from '../constants/actions'

export const todoReducer = (prevState = createInitialState(), action) => {
    switch (action.type) {
    case ADD_TODO:
        return {
            todoList: [
                ...prevState.todoList,
                action.payload,
            ],
        }
    case DEL_TODO:
        console.log(JSON.stringify(prevState))
        console.log(JSON.stringify(action))
        return prevState
    default:
        return prevState
    }
}
