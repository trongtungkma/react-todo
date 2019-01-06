import { initialState } from '../utils/initialState'

export const visibilityFilter = (state = initialState.visibility, action) => {
    switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
        return action.filter
    default:
        return state
    }
}
