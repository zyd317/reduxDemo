/**
 * reducer的入口文件，引入每个reducer
 * combineReducers
 */
import { combineReducers } from 'redux'
import counterReducer from './counter'

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer
