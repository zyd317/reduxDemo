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
        this.state = {
            test: "initial"
        } // 组件内部比较简单的状态使用state维护
    }

    /**
     * 组件将要被加载上，此时this.props还是初始值
     *
     * 每一个setState到下一个setState的地方才会生效
     */
    componentWillMount(){
        this.setState({
            test: "componentWillMount"
        });
        console.log(
            "componentWillMount-组件将要被加载上，\n只会执行一次",
            '\nthis.state-表示这个组件内部自己维护的state,一直没有setState所以一直不会改变-', this.state,
            '\nthis.props--', this.props
        );
    }

    /**
     * 一进入页面请求数据，使用一个 setXHR 的action来改变props,并且reRender
     * 同步操作
     */
    componentDidMount(){
        // 因此一般在这里设置state,props的初始值
        this.setState({
            test: "componentDidMount"
        });
        this.props.fetchXHR();
        console.log("\ncomponentDidMount\n-组件已经被加载上-有这个组件的实体了-虽然请求了fetchXHR，但是props还是没变，因为还没ReceiveProps\n只会执行一次",
            '\nthis.state--', this.state,
            '\nthis.props--', this.props
        );
    }

    /**
     * 已挂载组件接收到新的 props 之前。
     * 即使props没变也会调用，所以如果你想要真正处理 Props 的变化，需要比较当前 this.props 和nextProps(函数防抖动？？)。
     *
     * 修改input的内容,也可以使用下面的{reverseText: reverseText; inputText: inputText}
     * component 重新渲染时调用
     */
    componentWillReceiveProps(nextProps){
        // this.setState({
        //     test: "componentWillReceiveProps"
        // });

        // this.refs.test.value = nextProps.reverseState;

        console.log("\ncomponentWillReceiveProps\n-已挂载组件接收到新的 props 之前，即使props没变也会调用" +
            "\nmount之后，当组件props change的时候，会再次执行",
            '\nnextProps--', nextProps,
            '\nthis.state--', this.state,
            '\nthis.props-还未收到props,nextProps才是接下来会改变的props-', this.props
        );
    }

    shouldComponentUpdate(nextProps, nextState){
        // this.setState({
        //     test: "shouldComponentUpdate-设置无效"
        // });
        console.log(
            "\nshouldComponentUpdate\n返回组件是否需要更新,调用setState不会生效，默认true, 同上" +
            "\nmount之后state change或者ReceiveProps之后，会再次执行",
            '\nnextProps--', nextProps,
            '\nnextState-为componentDidMount的值-', nextState,
            '\nthis.state-为componentWillMount的值-', this.state,
            '\nthis.props--', this.props
        );
        return true;
    }

    componentWillUpdate(){
        // 不能调用setState会导致一直重绘
        // this.setState({
        //     test: "componentWillUpdate"
        // });
        console.log("\ncomponentWillUpdate\n组件即将更新状态",
            '\nthis.state-不能设置state的地方都不算state生命周期，因此展示的还是上上一个setState的值-', this.state,
            '\nthis.props-这个时候props还没改变，will-', this.props
        );
    }

    componentDidUpdate(){
        // 不能调用setState会导致一直重绘
        // this.setState({
        //     test: "componentDidUpdate"
        // });
        console.log("\ncomponentDidUpdate\n组件已经更新状态",
            '\nthis.state-componentDidMount的值-', this.state,
            '\nthis.props-这个时候props才真正被改变-', this.props
        );
    }

    // 组件将要被卸载的时候调用
    componentWillUnmount(){
        // 组件已经销毁，没有setState
        // this.setState({
        //     test: "componentWillUnmount"
        // });
        console.log("\ncomponentWillUnmount\nmount之后，组件即将被移除",
            '\nthis.state--', this.state,
            '\nthis.props--', this.props
        );
    }

    /**
     * 在自己组件里处理ajax请求，响应之后调用action
     * 在reducer里面直接发送ajax请求，dispatch和ajax都是异步的，导致结果未到就已经render了
     *
     * 或者第二种办法，在action里面请求xhr,响应之后再dispatch这个方法
     */
    // onClick(){
    //     let xml = new XMLHttpRequest();
    //     xml.onreadystatechange = ()=>{
    //         if (xml.readyState===4)
    //         {
    //             if (xml.status===200)
    //             {
    //                 this.props.reverse(xml.responseText);
    //             }
    //         }
    //     };
    //     xml.open("GET", '/api/reverseAjax', true);
    //     xml.send(null);
    // }

    render(){
        return (
            <div className="m-reverse">
                <p>我是另外一个store, reverse下面input框里面的值是：</p>
                <div className="reverse-result">{this.props.reverseState.reverseText}</div>
                <input className="input-default" ref="test" value={this.props.reverseState.inputText} onChange={(e)=>{
                    this.props.getInput(e.target.value);
                }}/>
                <button className="btn-default" onClick={() => this.props.reverse(this.refs.test.value)}> reverse </button>
            </div>
        );
    }
}
export default Reverse;
