/**
 * 存放各种事件的key-value
 * @type {string} 返回的是一个对象，对象名称increment是调用的名称，type(INCREMENT_COUNTER)是在reducer里面的状态
 */
import * as Types from "../constants/counter";

export const multiply = (value) => ({
    type: Types.MULTIPLY_COUNTER,
    value: value
});

export const increment = () => ({
    type: Types.INCREMENT_COUNTER
});

export const decrement = () => ({
    type: Types.DECREMENT_COUNTER
});

export const incrementIfOdd = () => (dispatch, getState) => {
    const { counter } = getState();
    if (counter % 2 === 0) {
        return
    }
    dispatch(increment())
};

export const incrementAsync = (delay = 1000) => dispatch => {
    setTimeout(() => {
        dispatch(increment())
    }, delay);
};
