import React, {Component} from 'react';

var less = require('./fullScreen.less');

class FullScreen extends Component {
    constructor(...args) {
        super(...args);
    }
    touchStart(e) {
        console.log(e.targetTouches[0].pageY);
    }
    touchMove(e) {
        console.log(e.targetTouches[0].pageY);
    }
    touchEnd(e) {
        
    }
    render() {
        const {children} = this.props;
        return (
            <div
                className='fullScreen'
                onTouchStart={this.touchStart.bind(this)}
                onTouchMove={this.touchMove.bind(this)}
                onTouchEnd={this.touchEnd.bind(this)}>
                {children}
            </div>
        );
    }
}
module.exports = FullScreen;