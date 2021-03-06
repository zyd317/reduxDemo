## redux的例子

## 功能

1. 显示点击次数，初始为一个随机数
2. 点击如果是偶数就增加
3. 点击异步增加
4. 点击乘以N

## 启动

1. npm install
2. npm start ，使用node来启动服务，node默认端口是3170
3. 访问 http://127.0.0.1:3170/page/?counter=12&countState=23

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
├── common  // 资源文件js，css...
│   ├── actions  // redux的指令与事件的触发对应，返回各种对象
│   ├── components  // UI组件，调用action
│   │   ├── Counter
│   │   ├── Reverse
│   │   └── index.js
│   ├── constants  // 一些redux事件名称常量
│   ├── containers // 外层组件，每一个单独可运行的组件，具有dispach事件的能力
│   │   ├── App
│   │   ├── Reverse
│   │   └── index.js
│   ├── reducers // 处理事件switch case，操作每个props的state
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
2. 注意几个loaders配置的是否正确，用来"解压"scss，jsx等。当然也需要安装这些modules
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
- props: this.props.reducerName，reducer更新state之后
- input等输入框加入value之后，输入被禁用。再绑定一个onchange事件来手动修改输入内容。
- 生命周期
    * **componentWillMount()** 组件挂载之前，render之前。
    使用setState不会导致页面重绘
    * **componentDidMount()** 组件挂载之后。
    适用：
        * 需要初始化 DOM 节点的操作
        * AJAX 请求
    * **componentWillReceiveProps(nextProps)** 已挂载组件接收到新的 props 之前。
    即使props没变也会调用，所以如果你想要真正处理 Props 的变化，需要比较当前 this.props 和nextProps(函数防抖动？？)。
    适用：
        * 更新 state的值（比如重置，必须这里的Reverse里面设置input里面的值）
        * 比较 this.props 和 nextProps
    * **shouldComponentUpdate(nextProps, nextState)** 当组件接收到新的 Props 或者 state时，
    要进行 rendering之前会调用，告诉 React 组件是否需要重新渲染，默认返回 true。
    * **componentWillUpdate()** ，state or props 更新后re-render之前调用。不能在这里调用 setState。
    * **componentDidUpdate()**，在组件更新之后马上调用。
    适用：
        * 操作 DOM
        * 发起网络请求
    * **componentWillUnmount()**，在组件卸载和销毁前调用。不能在这里调用 setState。
    适用：
        * 取消定时器
        * 取消网络请求
        * 解绑 DOM 事件
        
**react生命周期图示**     
<div style="margin: 0 auto;width: 600px;">
    <img src="./componentsLife.png">
</div>


## redux作为UI组件的事件管理

* 页面需要 <Provider store={store}><App/></Provider> Provider包裹，并传入store设置store的初始状态
* configureStore，store的配置文件，const store = createStore(rootReducer, preLoadedState)传入reducer的入口和state的初始值，并返回一个store对象
* reducer 引入每个reducer，并且const rootReducer = combineReducers({ counter: counterReducer});
* containers/App connect(mapStateToProps, mapDispatchToProps)(Counter)
* mapStateToProps(return store({})) 传入的是一个store对象
* reducer可以返回一个对象
    * components中使用this.props.actionName调用action
    * this.props.reducerName获取reducer的state（这个state是reducer里面的switch-case返回的值）
* 添加ajax请求。一般在action里面发一个ajax请求，**返回数据之后dispatch相应的action** 。在reducer里面的操作都是同步的，发送ajax请求会导致还未收到相应就已经render了

## todos

- [x] 增加scss支持，loaders
- [x] 自动增加css前缀，minx/loaders自动添加
- [x] 添加redux
- [x] 增加ajax请求
- [x] 添加生命周期
- [ ] 添加router
