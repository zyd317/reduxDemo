import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'
const store = configureStore(window.__PRELOADED_STATE__); // 设置store的初始值
render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);





