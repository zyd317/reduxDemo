/**
 * reducer的入口文件，引入每个reducer
 * combineReducers
 */
import { combineReducers } from 'redux'
import counterReducer from './counter'
import countState from './countState'

const rootReducer = combineReducers({
    counter: counterReducer,
    countState: countState
});

export default rootReducer
