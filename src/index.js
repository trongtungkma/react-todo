import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import App from './views/App'
import './index.css'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'),
)
