/**
 * 一个webpack配置的模板，当前为dev环境
 * @type {webpack}
 */
let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: './index.js',
        vendor: [ "react", "react-dom", "react-redux", "redux" ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 模块热更新
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
    ],
    module: {
        rules:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader?presets[]=es2015&presets[]=react"
                }]
            },
            {
                test: /\.[s]?css$/,
                // include: path.resolve(__dirname, "common/styles"),
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'sass-loader'
                }]
            }
        ]
    }
};
