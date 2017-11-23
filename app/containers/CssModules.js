import React, {Component} from 'react';

import {connect} from 'react-redux';

//组件

import CssModules from '../components/CssModules.jsx';

class App extends Component {

  render() {
    return (<CssModules/>);
  }
}
const mapStateToProps = function (state) {
  return {}
};
const mapDispatchToProps = function (dispatch) {
  return {}

};
export default connect(mapStateToProps, mapDispatchToProps)(App);