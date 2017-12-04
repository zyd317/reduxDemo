/**
 * Created by yidi.zhao on 2017/12/4.
 * 另外一个reducer
 */
import { REVERSE } from '../constants/countState'

const countState = (state = {}, action) => {
    switch (action.type) {
        case REVERSE:
            // return document.getElementById("text").value.split("").reverse().join("");
            return action.value.split("").reverse().join("");
            break;
        default:
            return state;
    }
};
export default countState