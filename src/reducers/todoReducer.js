import { createInitialState } from '../utils/createInitialState'
import { ADD_TODO } from '../constants/actions'

export const todoReducer = (prevState = createInitialState(), action) => {
    switch (action.type) {
        case ADD_TODO:
            const nextState = {
                todoList: [
                    ...prevState.todoList,
                    action.payload,
                ],
            };

            return nextState
        default:
            return prevState
    }
}
