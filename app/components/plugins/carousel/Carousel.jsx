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
            index: 0,
            audioPlay:false
        }

    }
    componentDidMount(){
        const {images} = this.props;
        if(images[0].type=='audio'&&images[0].extraUrl){
            this.setState({
                audioPlay:true
            })
        }else{
            this.setState({
                audioPlay:false
            })
        }
    }
    next() {
        const {images} = this.props;
        const  len = images.length-1;
        var next = this.state.index==len?0:this.state.index+1;
        if(images[next].type=='audio'&&images[next].extraUrl){
            this.setState({
                audioPlay:true
            })
        }else{
            this.setState({
                audioPlay:false
            })
        }
        this.setState({index: next})
    }
    prev() {
        const {images} = this.props;
        const  len = images.length-1;
        var prev = this.state.index==0?len:this.state.index-1;
        if(images[prev].type=='audio'&&images[prev].extraUrl){
            this.setState({
                audioPlay:true
            })
        }else{
            this.setState({
                audioPlay:false
            })
        }
        this.setState({index: prev})
    }
    playAudio(){
        const {images} = this.props;
        let audioPlayer = document.getElementById('audio-player');
        audioPlayer.src=images[this.state.index].extraUrl;
        audioPlayer.play();
        console.log(audioPlayer.isPlaying);
    }
    getImageList(images){
        var dom = [];
        for(let i=0;i<images.length;i++){
            if(images[i].type&&images[i].type=="audio"){
                dom.push(<div key={i}>
                    <img src={images[i].url} alt=""/>
                </div>);
            }else{
                dom.push(<div key={i}>
                    <img src={images[i].url} alt=""/>
                </div>);
            }
        }
        return dom;
    }
    render() {
        const {width, height, autoplay, dots,images} = this.props;
        console.log(images.length);
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
                    {this.getImageList(images)}
                </Carousel>
                <div className="audio-play" onClick={this.playAudio.bind(this)} style={{display:this.state.audioPlay?'block':'none'}}>play audio</div>
                <audio id="audio-player" src="" style={{display:'none'}}></audio>
            </div>

        );
    }
}
module.exports = App;