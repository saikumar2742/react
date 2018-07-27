import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.jsx';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducers from './reducers/index.jsx'
import {Router, browserHistory, Route} from 'react-router'

var store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Layout} ></Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);