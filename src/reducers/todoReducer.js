// import { createInitialState } from '../utils/createInitialState'
import { ADD_TODO, DEL_TODO } from '../constants/actions'

export const todoReducer = (prevState = [], action) => {
    switch (action.type) {
    case ADD_TODO:
        return ([
            ...prevState,
            action.payload,
        ])
    case DEL_TODO:
        return prevState.filter(item => (item.id !== action.payload.id))
    default:
        return prevState
    }
}
