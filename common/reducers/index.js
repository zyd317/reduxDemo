/**
 * reducer的入口文件，引入每个reducer
 * combineReducers
 */
import { combineReducers } from 'redux'
import counterReducer from './counter'
import reverseReducer from './reverse'

const rootReducer = combineReducers({
    counter: counterReducer,
    reverse: reverseReducer
});

export default rootReducer
