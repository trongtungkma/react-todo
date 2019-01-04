const ActionTypes = {
    INIT: '@@redux/INIT'
}

const createStore = (reducer, initialState) => {
    const store = {}
    store.state = initialState
    store.listeners = []

    store.getState = () => store.state;

    store.subscribe = (listener) => {
        store.listeners.push(listener)
    }

    store.dispatch = (action) => {
        store.state = reducer(store.state, action)
        store.listeners.forEach(listener => listener())
    }

    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    store.dispatch({
        type: ActionTypes.INIT,
    })

    return store
}

export default createStore