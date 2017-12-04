import React, {Component} from 'react';
import {Carousel} from 'antd';
require('antd/dist/antd.min.css');
require('./carousel.less');

import img1 from './demo1.jpg';
import img2 from './demo2.jpg';

class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            index: 0
        }

    }
    next() {
        var next = this.state.index==5?0:this.state.index+1;
        this.setState({index: next})
    }
    prev() {
        var prev = this.state.index==0?5:this.state.index-1;
        this.setState({index: prev})
    }
    render() {
        const {width, height, autoplay, dots} = this.props;
        return (
            <div
                className='carseoul'
                style={{
                width: width,
                height: height
            }}>
                <div
                    className='slick-block'
                    style={{
                    width: width,
                    height: height
                }}>
                    <div
                        className='slick-left'
                        style={{
                        height: height
                    }}>
                    <div className='left-btn' onClick={this
                        .prev
                        .bind(this)}>上一页</div>
                    </div>
                    <div
                        className='slick-right'
                        style={{
                        height: height
                    }}>
                     <div className='right-btn' onClick={this
                        .next
                        .bind(this)}>下一页</div>
                    </div>
                </div>
                <Carousel slickGoTo={this.state.index} autoplay={autoplay} dots={dots}>
                    <div>
                        <img src={img1} alt=""/>
                    </div>
                    <div>
                        <img src={img2} alt=""/>
                    </div>
                    <div>
                        <img src={img1} alt=""/>
                    </div>
                    <div>
                        <img src={img2} alt=""/>
                    </div>
                    <div>
                        <img src={img1} alt=""/>
                    </div>
                    <div>
                        <img src={img2} alt=""/>
                    </div>
                </Carousel>
            </div>

        );
    }
}
module.exports = App;