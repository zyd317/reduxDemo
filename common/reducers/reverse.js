/**
 * Created by yidi.zhao on 2017/12/4.
 * 另外一个reducer
 * action.value 传入value
 * state是上一个state的值，return之后会改变这个state
 * 此处，初始时state = {reverseText: , inputText: }
 */
import { REVERSE, GETINPUT, SETDATA } from '../constants/reverse'

const reverse = (state = {}, action) => {
    switch (action.type) {
        case REVERSE:
            let res = action.value.split("").reverse().join("");
            return {
                reverseText: res,
                inputText: res
            };
        case GETINPUT:
            return { // 得到一个新的state,每一个return都会改变该reducer的state
                reverseText: state.reverseText, // state是上一次的值，空白处文案不变
                inputText: action.value // input的值，因为input设置value之后不允许输入，使用onchange事件将输入注入value中
            };
        case SETDATA:
            return {
                reverseText: state.reverseText + "的值是：" + JSON.parse(action.value).key,
                inputText: state.inputText + "的值是：" + JSON.parse(action.value).key
            };
        default:
            return state;
    }
};
export default reverse;