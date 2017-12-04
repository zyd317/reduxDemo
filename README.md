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

````bash
.
├── LICENSE
├── README.md
├── build
│   ├── bundle.js // 变动很多的，压缩文件，一般是业务代码
│   └── vendor.js   // 变动很少的，需要单独压缩的文件，一般是各种库文件
├── client
│   └── index.js
├── common  // 资源文件js,css...
│   ├── actions  // redux的指令与事件的触发对应，返回各种对象
│   ├── components  // UI组件,调用action
│   │   ├── Counter
│   │   ├── Reverse
│   │   └── index.js
│   ├── constants  // 一些redux事件名称常量
│   ├── containers // 外层组件，每一个单独可运行的组件，具有dispach事件的能力
│   │   ├── App
│   │   ├── Reverse
│   │   └── index.js
│   ├── reducers // 处理事件switch case,操作每个props的state
│   │   ├── counter.js // 不同的reducer
│   │   ├── index.js
│   │   └── reverse.js
│   ├── store  // store的配置文件，reducer
│   │   └── configureStore.js
│   ├── scripts // 公共函数
│   └── styles // 公共样式
├── index.js // 入口引入client/index
├── package-lock.json // 版本锁
├── package.json
├── server
│   ├── index.js
│   └── server.js  // 服务器端代码，node。构建页面dom
├── webpack.config.js   // beta环境的webpack配置
└── webpack.config.production.js   // 线上环境的webpack配置
````

## webpack

0. vendor.js需要在功能js之前引入，因为人家是库嘛。
1. 注意webpack配置: 
    * dev环境下不要 **new uglifyJsPlugin({ compress: { warnings: false } })** 否则会warning，dev环境下不要压缩代码
    * 根据webpack-dev-server --env dev表示是开发环境 **new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")}})  设置参数环境**
2. 注意几个loaders配置的是否正确，用来"解压"scss,jsx等。当然也需要安装这些modules
3. include表示loaders只在这个目录下生效，exclude表示loaders只在这个目录下不生效
4. **从服务器端发送的页面需要写publicPath，用来设置网站资源的跟路径是什么**

## webpack作为打包工具

- 见webpack配置文件

## node作为服务器

- configureStore(preLoadedState);设置store的初始状态; store.getState()获取store的初始状态
- webpackDevMiddleware，webpackHotMiddleware 中间件设置webpack模块热更新
- app.use(callback(req, res))
- res.send将页面发送到服务器

## react

- ref: this.refs.refId
- components setState
- props: this.props.reducerName,reducer更新state之后
- input等输入框加入value之后，输入被禁用。再绑定一个onchange事件来手动修改输入内容。


## redux作为UI组件的事件管理

* 页面需要 <Provider store={store}><App/></Provider> Provider包裹，并传入store设置store的初始状态
* configureStore,store的配置文件，const store = createStore(rootReducer, preLoadedState)传入reducer的入口和state的初始值，并返回一个store对象
* reducer 引入每个reducer,并且const rootReducer = combineReducers({ counter: counterReducer});
* containers/App connect(mapStateToProps, mapDispatchToProps)(Counter)
* mapStateToProps(return store({})) 传入的是一个store对象
* reducer可以返回一个对象
    * components中使用this.props.actionName调用action
    * this.props.reducerName获取reducer的state（这个state是reducer里面的switch-case返回的值）

## todos

- [x] 添加redux
- [ ] 添加router
