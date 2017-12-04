/**
 * Created by yidi.zhao on 2017/12/4.
 * 另外一个reducer
 */
import { REVERSE } from '../constants/countState'

const counterReducer = (state = {}, action) => {
    switch (action.type) {
        case REVERSE:
            return document.getElementById("text").value.split("").reverse().join("");
        default:
            return state + "----2";
    }
};
export default counterReducer