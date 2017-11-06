import React, {Component} from 'react';
var less = require('./doc.less');

import lovarv from '../../../images/lovarv.jpg';

class Document extends Component {
    constructor(...args) {
        super(...args);
    }
    render() {
        return (
            <div className="doc-reader">
                <img src={lovarv} alt=""/>
                <img src={lovarv} alt=""/>
                <img src={lovarv} alt=""/>
                <img src={lovarv} alt=""/>
                <img src={lovarv} alt=""/>
                <img src={lovarv} alt=""/>
                <div className='occupy-block'></div>
            </div>
        );
    }
}
module.exports = Document;