/**
 * 存放自己的reducer
 * 每个action.type表示不同的指令
 * 同一个reducer应该都是操作同一个变量
 *
 * 传入的每个action都是一个对象，都至少有一个type属性，来根据type执行不同的操作，得到不同的value
 */
import { INCREMENT_COUNTER, DECREMENT_COUNTER, MULTIPLY_COUNTER } from '../constants/counter1'

const counterReducer = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
      case MULTIPLY_COUNTER:
          return state * action.value;
    default:
      return state
  }
};
export default counterReducer
