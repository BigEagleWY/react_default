import React, {Component} from 'react';
require('./less/threescreen.less');

class ThreeScreen extends Component {
    constructor(...args) {
        super(...args);
        this.state={
            one:'left-top',
            three:'right',
            oneHeight:0,
            threeHeight:0
        }
    }
    componentWillMount(){
        const {height} = this.props;
        this.setState({
            oneHeight:height/3,
            threeHeight:height
        });
    }
    transfer(){
        var tempOne = this.state.one;
        var tempThree = this.state.three;
        var tempOneHeight = this.state.oneHeight;
        var tempThreeHeight = this.state.threeHeight;
        this.setState({
            one:tempThree,
            three:tempOne,
            oneHeight:tempThreeHeight,
            threeHeight:tempOneHeight
        });
    }
    render() {
        const {width,height} = this.props;
        return (
            <div className='three-screen' style={{width:width,height:height}}>
                <div className={'one '+this.state.one} style={{height:this.state.oneHeight}}>
                    <h3>video</h3>
                    <div className='transfer' onClick={this.transfer.bind(this)}></div>
                </div>
                <div className='two left-down' style={{height:height*2/3,top:height/3}}>
                <h3>menu</h3>
                </div>
                <div className={'three '+this.state.three} style={{height:this.state.threeHeight}}>
                <h3>document</h3>
                </div>
            </div>
        );
    }
}
module.exports = ThreeScreen;