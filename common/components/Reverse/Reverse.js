/**
 * Created by yidi.zhao on 2017/12/4.
 * 使用ref的示例
 * this.refs.refId获取对应的dom,在action里的action.value获取
 *
 * this.props.actionName（this.props.getInput）可以调用对应的action.因为mapDispatchToProps，mapStateToProps可以把action dispatch 到引用组件的props上
 * this.props.reducerState（this.props.reverseState）可以得到该component的state
 * *因此，this.props.action/state可以调用action,也可以获取该组件的state*
 */
import React, {Component} from "react";
import './index.scss';

class Reverse extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    // // 修改input的内容,也可以使用下面的{reverseText: reverseText; inputText: inputText}
    // componentWillReceiveProps(nextProps){
    //     this.refs.test.value = nextProps.reverseState;
    // }

    render(){
        return (
            <p className="m-reverse">
                我是另外一个store, reverse下面input框里面的值是：
                    <div className="reverse-result">{this.props.reverseState.reverseText}</div>
                <input className="input-default" id="text" ref="test" onChange={(e)=>{
                    this.props.getInput(e.target.value);
                }} value={this.props.reverseState.inputText}/>
                <button className="btn-default" onClick={() => this.props.reverse(this.refs.test.value)}> reverse </button>
            </p>
        );
    }
}
export default Reverse;
