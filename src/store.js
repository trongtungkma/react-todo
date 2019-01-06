import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import _ from 'lodash'

import rootReducer from './reducers'
import { initialState } from './utils/initialState'

// A sample of middleware
function logger({ getState }) {
    return next => (action) => {
        // console.log('will dispatch', action)
        // Call the next dispatch method in the middleware chain.
        const newAction = _.merge({ monitor: getState() }, action)
        const returnValue = next(newAction)
        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
    name: 'Todo Store',
})

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(logger),
    // other store enhancers if any
))

export default store
