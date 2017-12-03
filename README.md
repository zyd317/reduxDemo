## redux的例子

## 功能

1. 显示点击次数，初始为一个随机数
2. 点击如果是偶数就增加
3. 点击异步增加
4. 点击乘以N

## 启动
1. npm install
2. npm start，使用node来启动服务，node默认端口是3000

3. webpack 压缩资源，生产build
2. webpack-dev-server -w 需要host里面有localhost

## 项目目录

```bash
|--common，资源文件js,css...
|   |--actions redux的指令与事件的触发对应，返回各种对象
|   |--components UI组件
|   |--containers 外层组件，每一个单独可运行的组件，具有dispach事件的能力
|   |--reducer 处理事件switch case
|   |--store store的配置文件，reducer
|   |--constants 一些redux事件名称常量
|   |--scripts 
|   └──styles
|
|--build webpack编译之后的文件夹
|   ├──vendor.js 变动很少的，需要单独压缩的文件，一般是各种库文件
|   └──bundle.js 变动很多的，压缩文件，一般是业务代码
|
|--server
|    |--index.js
|    └──server.js 服务器端代码，node。构建页面dom，引入react等必要的库
|
|--index.js 入口引入client/index
|
├──webpack.config.js beta环境的webpack配置
│
└──webpack.config.production.js 线上环境的webpack配置
```

## webpack
0. vendor.js需要在功能js之前引入，因为人家是库嘛。
1. 注意webpack配置: dev环境下不要
**new uglifyJsPlugin({ compress: { warnings: false } })**
否则会warning，dev环境下不要压缩代码
根据webpack-dev-server --env dev表示是开发环境
**new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")}})  设置参数环境**
2. 注意几个loaders配置的是否正确，用来"解压"scss,jsx等。当然也需要安装这些modules
3. include表示loaders只在这个目录下生效，exclude表示loaders只在这个目录下不生效
4. **从服务器端发送的页面需要写publicPath，用来设置网站资源的跟路径是什么**


## node作为服务器
## webpack作为打包工具
## redux作为UI组件的事件管理
