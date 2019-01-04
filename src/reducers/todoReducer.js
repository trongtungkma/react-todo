import { createInitialState } from '../utils/createInitialState'
import createStore from '../utils/createStore'
import { createAddTodo } from '../actions/todoActions'
import { ADD_TODO } from '../constants/actions'

export const reducer = (prevState = createInitialState(), action) => {
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

// Can make some console logs for verification
export const testStore = () => {

    // create & init store with initial state and action
    const initialState = createInitialState()
    const store = createStore(reducer, initialState)

    // confirm state
    console.log(JSON.stringify(store.getState()))

    // dispatch add TO-DO action
    const addToDoAction = createAddTodo('Build a simple redux store')
    store.dispatch(addToDoAction)

    // confirm state
    console.log(JSON.stringify(store.getState()))
}
