/**
 * Created by yidi.zhao on 2017/12/4.
 * 使用ref的示例
 * this.props.actionName可以调用对应的action.因为mapDispatchToProps，mapStateToProps可以把action dispatch 到引用组件的props上
 * this.refs.refId获取对应的dom,在action里的action.value获取
 */
import React, {Component} from "react";

class Reverse extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <p>
                我是另外一个store, 我的值是: {this.props.reverseState}
                <input id="text" ref="test"/>
                <button onClick={() => this.props.reverse(this.refs.test.value)}> reverse </button>
            </p>
        );
    }
}
export default Reverse;
