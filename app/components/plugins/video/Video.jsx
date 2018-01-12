import React, { Component } from 'react';
import videojs from 'video.js';

import "video.js/dist/video-js.css";
require("./jquery-1.8.0.js");
require("./video.init.js");

class Video extends Component {
    constructor(...args) {
        super(...args);
    }
    componentWillMount(){
        window.videojs = videojs;
    }
    render() {
        return (
            <div className="video-container">
                <video id="my_video_1" className="video-js vjs-default-skin" controls preload="auto" width="640" height="268" data-setup='{}'>
                    <source src="http://obukb5fdy.bkt.clouddn.com/icevideo/video/nayuta.mp4" type='video/mp4' />
                </video>
            </div>
        );
    }
}
module.exports = Video;