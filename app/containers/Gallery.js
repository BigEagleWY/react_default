import React, {Component} from 'react';

import {connect} from 'react-redux';

//组件

import Image from '../components/Image.jsx';

class App extends Component {

  render() {
    return (<Image />);
  }
}
const mapStateToProps = function (state) {
  return {}
};
const mapDispatchToProps = function (dispatch) {
  return {}

};
export default connect(mapStateToProps, mapDispatchToProps)(App);