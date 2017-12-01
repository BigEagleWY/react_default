import React, {Component} from 'react';
import Carousel from './plugins/carousel/Carousel.jsx';
require('./less/onepaperdoc.less');

class OnePaperDoc extends Component {
    constructor(...args) {
        super(...args);
    }
    render(){
        const {width,height} = this.props;
       return (
           <div className='one-paper-doc' style={{width:width,height:height}}>
           <Carousel width={width} height={height} autoplay={false} dots={false}></Carousel>
           </div>
       ); 
    }
}
module.exports = OnePaperDoc;