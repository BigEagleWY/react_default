import React, {Component} from 'react';

import {connect} from 'react-redux';

import {getData,getData2} from '../actions/index.js';

//组件

import Index from '../components/Index.jsx';

class App extends Component {

  componentWillMount(){
    const {getData,getData2} = this.props;
    getData();
    getData2();
  }

  render() {
    return (<Index/>);
  }
}
const mapStateToProps = function (state) {
  return {}
};
const mapDispatchToProps = function (dispatch) {
  return {
    getData:function(){
      dispatch(getData());
    },
    getData2:function(){
      dispatch(getData2());
    }
  }

};
export default connect(mapStateToProps, mapDispatchToProps)(App);