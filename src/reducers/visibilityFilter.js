import { VisibilityFilters } from '../constants/actions'

export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
        return action.filter
    default:
        return state
    }
}
