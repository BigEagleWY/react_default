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

//容器 Carousel
import Index from './containers/Index.js';
import Carousel from './containers/Carousel.js';

import Store from './store/';

const store = Store();


render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Index}></Route>
            <Route path="/index" component={Index}></Route>
            <Route path="/carousel" component={Carousel}></Route>
        </Router>
    </Provider>
), document.getElementById('con'));

// WEBPACK FOOTER // ./app/main.js