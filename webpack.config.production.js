/**
 * 一个webpack配置的模板，当前为生产环境
 * @type {webpack}
 */
// 包含进来一些需要的库
let webpack = require('webpack'),
    path = require('path'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    CopyWebpackPlugin = require('copy-webpack-plugin'); //
module.exports = {
    context: path.resolve(__dirname, "app"), // 上下文路径，所有路径相对于此
    entry: {
        app: ['./client/index.js']//js的入口文件
        // 需要单独压缩的文件，一般是引入的库文件或者变动很少的
        ,vendor: [
            "react",
            "react-dom",
            "react-redux",
            "redux"
        ]
    },
    output: {
        // 表示输出路径为build/bundle.js
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/, // 表示除了/node_modules/下的代码，都需要编译
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
                // 编译这个babel-loader需要额外的babel-preset-es2015和babel-preset-react.下面等价
                // loader: 'babel-loader',
                // query: { presets: ['es2015', 'react'] }
            },
            //编译css需要的loader
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "app/styles"), // 表示只有app/styles下的。css才会被编译
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    plugins: [
        new uglifyJsPlugin({ compress: { warnings: false } }), // ugLifyJs，可以最小化编译js.混淆插件。开发环境下不要压缩
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080/' }), // 自动打开地址，相对于context的path
        new webpack.HotModuleReplacementPlugin(),//即设置不热更新,运行状态下不更新js文件
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }), // 块文件。webpack版本不同的话语法不一样
        new webpack.DefinePlugin({
            "process.env": {NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")} // 设置当前为开发环境
        }),
        new CopyWebpackPlugin([
            { from: './app/index.html', to: 'index.html' },
            { from: './app/index.js', to: 'index.js' }
        ])
    ]
};
