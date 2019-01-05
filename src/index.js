import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { todoReducer } from './reducers/todoReducer';
import { createInitialState } from './utils/createInitialState'

import App from './components/App'
import './index.css'

const store = createStore(todoReducer, createInitialState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

