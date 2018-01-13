/**
 * 是整个redux的配置文件，引入reducer的主文件
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index.js' // 引入全局使用的store

const configureStore = (preLoadedState) => {
    const store = createStore(
        rootReducer,
        preLoadedState,
        applyMiddleware(thunk)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
};

export default configureStore
