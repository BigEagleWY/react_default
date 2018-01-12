import React, {Component} from 'react';

import {connect} from 'react-redux';

//组件

import Video from '../components/plugins/video/Video.jsx';

class App extends Component {

  render() {
    return (<Video />);
  }
}
const mapStateToProps = function (state) {
  return {}
};
const mapDispatchToProps = function (dispatch) {
  return {}

};
export default connect(mapStateToProps, mapDispatchToProps)(App);