// This will be fed into the reducer when the app loads to initialize the state
import { VisibilityFilters } from '../constants/actions'

export const initialState = {
    todoList: [],
    visibility: VisibilityFilters.SHOW_ALL,
}
