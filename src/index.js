import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import { todoReducer } from './reducers/todoReducer'
import rootReducer from './reducers'
// import { createInitialState } from './utils/createInitialState'

import App from './components/App'
import './index.css'

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)
