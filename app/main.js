//main.js
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {
    Router,
    Route,
    Link,
    hashHistory,
    IndexRoute,
    Redirect,
    IndexLink,
    browserHistory
} from 'react-router';

//容器
import Index from './containers/Index.js';

import Store from './store/';

const store = Store();


render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Index}></Route>
            <Route path="/index" component={Index}></Route>
        </Router>
    </Provider>
), document.getElementById('con'));

// WEBPACK FOOTER // ./app/main.js