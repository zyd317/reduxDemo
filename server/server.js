/**
 * 服务器端运行
 * send html
 */

import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.js'

import React from 'react'
import configureStore from '../common/store/configureStore'

const app = new Express();
const port = 3170;

// 使用中间件来设置webpack模块热更新
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


const handleRender = (req, res, next) => {
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || 0;
    const preLoadedState = { counter };
    const store = configureStore(preLoadedState);// 设置store的初始状态{counter: 0}
    const finalState = store.getState(); // store.getState()获得页面展示时store的状态，{counter: 0}
    res.send(renderFullPage("服务器已经把代码发送过来啦。。。", finalState));

    // next(); // 已经send的res不能再进行next
};

app.use('/page/', handleRender);

// 渲染页面
const renderFullPage = (html, preLoadedState) => {
    return `
        <!doctype html>
        <html>
            <head>
                <title>reduxDemo</title>
                <meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
                <script src="/static/style.bundle.js"></script>
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState)}
                </script>
                <script>
                    (function() {
                        document.documentElement.style.fontSize = 
                            Math.round(document.documentElement.clientWidth / 375 * 100) + 'px';
                    })();
                </script>
                <script src="/static/app.bundle.js"></script>
            </body>
        </html>
    `
};

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});

// 路由
let routes = require('./router');
app.use('/', routes);
