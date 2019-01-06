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
        return {
            todoList: prevState.todoList.filter(item => (item.id !== action.payload.id)),
        }
    default:
        return prevState
    }
}
