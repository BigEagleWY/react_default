import React, {Component} from 'react';

import {connect} from 'react-redux';

//组件

import Index from '../components/Index.jsx';

class App extends Component {

  render() {
    return (<Index/>);
  }
}
const mapStateToProps = function (state) {
  return {}
};
const mapDispatchToProps = function (dispatch) {
  return {}

};
export default connect(mapStateToProps, mapDispatchToProps)(App);