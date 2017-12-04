/**
 * Created by yidi.zhao on 2017/12/4.
 */
import * as Types from "../constants/countState";

export const reverse = (value) => ({
    type: Types.REVERSE,
    value: value
});
