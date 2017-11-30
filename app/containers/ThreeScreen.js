import React, {Component} from 'react';

import {connect} from 'react-redux';

//组件

import ThreeScreen from '../components/ThreeScreen.jsx';

class App extends Component {

  render() {
    return (<ThreeScreen width={800} height={400} />);
  }
}
const mapStateToProps = function (state) {
  return {}
};
const mapDispatchToProps = function (dispatch) {
  return {}

};
export default connect(mapStateToProps, mapDispatchToProps)(App);