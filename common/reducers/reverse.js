/**
 * Created by yidi.zhao on 2017/12/4.
 * 另外一个reducer
 * action.value 传入value
 */
import { REVERSE, GETINPUT, SETXHR } from '../constants/reverse'

const reverse = (state = {}, action) => {
    switch (action.type) {
        case REVERSE:
            let res = action.value.split("").reverse().join("");

            // let xml = new XMLHttpRequest();
            // xml.onreadystatechange = ()=>{
            //     if (xml.readyState===4)
            //     {
            //         if (xml.status===200)
            //         {
            //             res = res + xml.responseText;
            //         }
            //     }
            // };
            // xml.open("GET", '/api/reverseAjax', true);
            // xml.send(null);

            return {
                reverseText: res,
                inputText: res
            };
        case GETINPUT:
            return { // 得到一个新的state,每一个return都会改变该reducer的state
                reverseText: state.reverseText, // state是上一次的值，空白处文案不变
                inputText: action.value // input的值，因为input设置value之后不允许输入，使用onchange事件将输入注入value中
            };
        case SETXHR:
            return {
                reverseText: state.reverseText + "的值是：" + JSON.parse(action.value.reverseText).key,
                inputText: state.inputText + "的值是：" + JSON.parse(action.value.inputText).key
            };
        default:
            return state;
    }
};
export default reverse;