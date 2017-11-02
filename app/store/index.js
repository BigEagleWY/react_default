import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import {
    createLogger
} from 'redux-logger';

import reducer from "../reducers/";

export default function infoStore(initState) {
    const store = createStore(
        reducer, 
        initState,
        compose(
            applyMiddleware(thunk, createLogger()),
            window.devToolsExtension?window.devToolsExtension():f=>f
        )
    );
    if(module.hot){
        module.hot.accept('../reducers',()=>{
            const nextReducers = require('../reducers');
            store.replaceReducer(nextReducers);
        })
    }
    return store;
}