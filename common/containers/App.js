/**
 * containers，用于给components里面传入action,并且dispatch这些事件
 * 需要引入这个components-Counter
 * 然后connect(mapStateToProps, mapDispatchToProps)(Counter)就可以把action派发给Counter

 * ！！！mapStateToProps 来将reducer（state.counter是reducer的名称）里返回的值与组件的state（**counter1为组件需要使用的值**）同步
 * 因此，mapStateToProps是可以将UI展示的值与对应reducer的返回值相对应
 * 相当于整个页面有一个state-{components(直接变量), reducer(state.reducerName)}
 * 相当于counter1是components的this.state = {counter1: counter1};
 * counter是一个函数onCounter(){ this.setState= {counter1: returnValue}}

 * mapDispatchToProps，是用来派发action.
 */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Counter} from '../components'
import * as CounterActions from '../actions/counter1'
const mapStateToProps = (state) => {
    return {
        counter1: state.counter
    }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
