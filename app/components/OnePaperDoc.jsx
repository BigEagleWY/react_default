import React, { Component } from 'react';
//import Carousel from './plugins/carousel/Carousel.jsx';
//require('./less/onepaperdoc.less');

class OnePaperDoc extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            images: []
        }
    }
    componentWillMount() {
        var images = [];
        for (let i = 1; i <= 12; i++) {
            if (i % 2 == 0) {
                images.push({
                    url: "http://localhost:8010/image/" + i + ".jpg",
                    extraUrl: "http://localhost:8010/audio/20161210.mp3",
                    type: 'audio'
                });
            } else {
                images.push({
                    url: "http://localhost:8010/image/" + i + ".jpg"
                });
            }

        }
        this.setState({
            images: images
        })
    }
    getImageList(images) {
        var dom = [];
        for (let i = 0; i < images.length; i++) {
            dom.push(<div key={i}>
                <img src={images[i].url} alt="" />
            </div>);
        }
        return dom;
    }
    render() {
        const { width, height } = this.props;
        return (
            
                <Carousel>
                    {this.getImageList(this.state.images)}
                </Carousel>
            
        );
    }
}
module.exports = OnePaperDoc;