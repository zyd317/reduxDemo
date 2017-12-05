/**
 * UI组件，直接调用action的方法
 * export一个UI组件(Counter)，需要传入action里的方法(increment, incrementIfOdd...)。
 * 这些方法会在外层components里面给他传入
 */
import React from 'react'

import "./index.scss";
let multiplyNumber = 3;
const Counter = ({counterState, increment, decrement, incrementIfOdd, incrementAsync, multiply}) => (
  <div className="m-counter">
    已经点击了: {counterState} 次
    <button className="btn-default" onClick={increment}>+</button>
    <button className="btn-default" onClick={decrement}>-</button>
    <button className="btn-default" onClick={incrementIfOdd}>如果是奇数就增加</button>
    <button className="btn-default" onClick={() => incrementAsync()}>异步增加</button>
    <button className="btn-default" onClick={() => multiply(multiplyNumber)}>乘以{multiplyNumber}</button>
  </div>
);
export default Counter
