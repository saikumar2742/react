import React from 'react';
import ReactDOM from 'react-dom';
import Results from './results.jsx';
import Form from './components/Form.jsx'
import Home from './components/Home.jsx'
import Layout from './layout.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers/index.jsx'
import { Router, browserHistory, Route } from 'react-router'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';

var store = createStore(reducers)
ReactDOM.render(
    <Layout>
        <Provider store={store} history={browserHistory}>
            <Router history={browserHistory}>
                <Route path='/' component={Home} />
                <Route path='/form' component={Form} />
            </Router>
        </Provider>
    </Layout>,
    document.getElementById('app')
);
// <Layout store={store}/>,