import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import createStore from './utils/createStore'
import { reducer } from './reducers/todoReducer'
import { createInitialState } from './utils/createInitialState'

const store = createStore(reducer, createInitialState())
ReactDOM.render(<App store={store} />, document.getElementById('root'));

