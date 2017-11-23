import React, {Component} from 'react';

class FootrButtons extends Component {
    constructor(...args) {
        super(...args);
    }
    componentWillMount() {
        var theme = 'white';
        require('./themes/'+theme+'/footerButtons.less');
    }
    render() {
        return (
            <div className='footer-buttons'>
                <div className='button-item'>评论</div>
                <div className='button-item'>收藏</div>
                <div className='button-item'>打分</div>
                <div className='button-item'>记录</div>
            </div>
        );
    }
}
module.exports = FootrButtons;