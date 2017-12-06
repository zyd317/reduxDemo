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
        this.state = {} // 组件内部比较简单的状态使用state维护
    }

    // 修改input的内容,也可以使用下面的{reverseText: reverseText; inputText: inputText}
    // component 重新渲染时调用
    // componentWillReceiveProps(nextProps){
    //     this.refs.test.value = nextProps.reverseState;
    // }

    /**
     * 已进入页面请求数据，使用一个 setXHR 的action来改变props,并且reRender
     * 同步操作
     */
    componentDidMount(){
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = ()=>{
            if (xml.readyState===4)
            {
                if (xml.status===200)
                {
                    this.props.setXHR({
                        reverseText: xml.response,
                        inputText: xml.response
                    });
                }
            }
        };
        xml.open("GET", '/api/openAjax', true);
        xml.send(null);
    }

    render(){
        return (
            <div className="m-reverse">
                我是另外一个store, reverse下面input框里面的值是：
                    <div className="reverse-result">{this.props.reverseState.reverseText}</div>
                <input className="input-default" id="text" ref="test" onChange={(e)=>{
                    this.props.getInput(e.target.value);
                }} value={this.props.reverseState.inputText}/>
                <button className="btn-default" onClick={() => this.props.reverse(this.refs.test.value)}> reverse </button>
            </div>
        );
    }
}
export default Reverse;
