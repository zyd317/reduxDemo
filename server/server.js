/**
 * 服务器端运行
 * configureStore
 * Provider
 */

import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'

import configureStore from '../common/store/configureStore'
import { fetchCounter } from '../common/api/counter'

import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from '../common/containers/App'

const app = new Express();
const port = 3002;

// 使用中间件来设置webpack模块热更新
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

const handleRender = (req, res) => {
  fetchCounter(apiResult => {
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || apiResult || 0;
    const preloadedState = { counter };
    const store = configureStore(preloadedState);

    // // 使用react返回的dom
    // const html = renderToString(
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // );
    const finalState = store.getState(); // 获得页面展示时store的状态，store.getState()可以获取当前状态
    res.send(renderFullPage("服务器已经把代码发送过来啦。。。", finalState));
  });
};

app.use(handleRender);

// 渲染页面
const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>lalllll</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/vendor.js"></script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
};

// 日志
app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
