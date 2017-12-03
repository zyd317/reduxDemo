/**
 * 存放各种事件的key-value
 * @type {string} 返回的是一个对象，对象名称increment是调用的名称，type(INCREMENT_COUNTER)是在reducer里面的状态
 */
export const SET_COUNTER = 'SET_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const TEST = 'TEST';


export const MULTIPLY_COUNTER = 'MULTIPLY_COUNTER';
export const multiply = (value) => ({
    type: MULTIPLY_COUNTER,
    value: value
});

export const test = (value) => ({
    type: TEST,
    value: value
});

export const increment = () => ({
  type: INCREMENT_COUNTER
});

export const decrement = () => ({
  type: DECREMENT_COUNTER
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
