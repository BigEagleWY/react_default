import React, {Component} from 'react';

import Document from './plugins/doc/Document.jsx';
import BaiduDoc from './plugins/doc/BaiduDoc.jsx';
import FooterButtons from './plugins/footerButton/FooterButtons.jsx';

var less = require('./less/index.less');

class Index extends Component {
    constructor(...args) {
        super(...args);
    }
    render() {
        return (
            <div>
                <BaiduDoc></BaiduDoc>
                <FooterButtons color={"red"}></FooterButtons>
            </div>
        );
    }
}
module.exports = Index;