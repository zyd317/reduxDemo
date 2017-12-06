/**
 * Created by yidi.zhao on 2017/12/4.
 */
import * as Types from "../constants/reverse";

export const reverse = (value) => ({
    type: Types.REVERSE,
    value: value
});

export const getInput = (value) => ({
    type: Types.GETINPUT,
    value: value
});

export const setXHR = (value) => ({
    type: Types.SETXHR,
    value: value
});
