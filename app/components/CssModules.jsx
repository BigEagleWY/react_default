import React, {Component} from 'react';
import CssInModules from 'react-css-modules';
import styles from './less/cssmodules.less';

class CssModules extends Component {
    constructor(...args) {
        super(...args);
    }
    render() {
        return (
            <div>
                <div className='bg'>
                <h3>css modules</h3></div>
            </div>
        );
    }
}
module.exports = CssInModules(CssModules,styles);