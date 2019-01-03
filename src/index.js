import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { testStore } from './reducers/todoReducer'

// verify our store, check output in your console
testStore()
ReactDOM.render(<App />, document.getElementById('root'));

