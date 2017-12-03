/**
 * UI组件，直接调用action的方法
 * export一个UI组件(Counter)，需要传入action里的方法(increment, incrementIfOdd...)。
 * 这些方法会在外层components里面给他传入
 */
import React from 'react'
const Counter = ({increment, incrementIfOdd, incrementAsync, decrement, counter1, multiply}) => (
  <p>
    点击了: {counter1} 次
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={incrementIfOdd}>如果是偶数就增加</button>
    <button onClick={() => incrementAsync()}>异步增加</button>
    <button onClick={() => multiply(3)}>乘以n</button>
  </p>
);
export default Counter
