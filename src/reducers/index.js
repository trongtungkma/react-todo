import { combineReducers } from 'redux'
import { todos } from './todos'
import { visibilityFilter } from './visibilityFilter'

export default combineReducers({
    todoList: todos,
    visibility: visibilityFilter,
})
