import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import { App, Reverse } from "../common/containers";
const store = configureStore({counter: 10, countState: "countState"}); // 设置store的初始值
render (
    <Provider store={store}>
        <div>
            <App/>
            <Reverse/>
        </div>
    </Provider>,
    document.getElementById('app')
);





