/**
 * Created by yidi.zhao on 2017/12/4.
 * 另外一个reducer
 */
import { REVERSE } from '../constants/countState'

const counterReducer = (state = {}, action) => {
    switch (action.type) {
        case REVERSE:
            return state + "----1";
        default:
            return state + "----2";
    }
};
export default counterReducer