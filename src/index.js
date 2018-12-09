// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { apiMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger'
// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes.js';
// App
import './index.scss';
import * as serviceWorker from './serviceWorker';

const storeCreator = applyMiddleware(thunk, apiMiddleware, logger)(createStore);
const store = storeCreator(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                {routes.map((route, index) => <Route key={index} {...route}></Route>)}
            </Switch>
        </Router>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
