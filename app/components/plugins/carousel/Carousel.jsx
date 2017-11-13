import React, {Component} from 'react';
import {Carousel} from 'antd';
require('antd/dist/antd.min.css');
require('./carousel.less');

import img1 from './demo1.jpg';
import img2 from './demo2.jpg';

class App extends Component {
    constructor(...args) {
        super(...args);

    }
    render() {
        
        return (
            <div
                style={{
                width: 300,
                height: 150
            }}>
                <Carousel autoplay={true} >
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