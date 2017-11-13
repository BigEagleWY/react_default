import React, {Component} from 'react';

import {connect} from 'react-redux';

//组件

import Carousel from '../components/plugins/carousel/Carousel.jsx';

class App extends Component {

    render() {
        var options = [{
            url:'//www.baidu.com',
            img:'',
        }];
        return (<Carousel/>);
    }
}
const mapStateToProps = function (state) {
    return {}
};
const mapDispatchToProps = function (dispatch) {
    return {}

};
export default connect(mapStateToProps, mapDispatchToProps)(App);