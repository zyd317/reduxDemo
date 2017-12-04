/**
 * containers，用于给components里面传入action,并且dispatch这些事件
 * 需要引入这个components-Reverse
 * 然后connect(mapStateToProps, mapDispatchToProps)(Reverse)

 * ！！！mapStateToProps 来将reducer（state.reverse是reducer的名称）里返回的值与组件的props（**reverseState为组件需要使用的值**）同步
 * 应用：this.props.reverseState.inputText
 * 相当于reverseState是components的this.props = {reverseState: reverseState};
 *
 * mapDispatchToProps，是用来派发action.
 * 应用：this.props.getInput()
 *
 * 相当于整个页面有一个state-{components(直接变量), reducer(state.reducerName)}
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Reverse } from '../../components/index';
import * as reverse from '../../actions/reverse'
const mapStateToProps = (state) => {
    return {
        reverseState: state.reverse
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(reverse, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Reverse)