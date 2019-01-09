## ES6模块化(export-import)编译时加载
>模块的设计思想最主要的有CommonJS(用于服务器) 和 AMD(用于浏览器)两种。
>
>之后ES6 在语言标准的层面上，也实现了模块功能，成为服务器和浏览器的通用解决方式。
>
>ES6 模块的设计思想是尽量的静态化，使得 **编译时就能确定模块的依赖关系** ，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在 **运行时** 确定这些东西。
```
// CommonJS模块。下面会加载fs的所有方法。运营时才能得到对象， **"运行时加载"**
let { stat, exists, readFile } = require('fs');
// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;


// ES6模块。从fs加载下面三个方法，其他不加载。 **"编译时加载"** 因此没办法引用es6模块本身，因为它不是对象
import { stat, exists, readFile } from 'fs';
```

### usage
>export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。
```
export var firstName = 'Michael'; // 导出某个变量
var lastName = 'Jackson';
export {
    firstName as name,
    lastName,
    year}; // 导出一组变量

// export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// 报错
export 1; // 1只是一个值不是接口
// 正确
export var m = 1;

// 报错
var m = 1;
export m;
// 正确
var m = 1;
export {m};
```

>import命令加载这个模块。
```
// import命令具有提升效果，会提升到整个模块的头部，首先执行。import命令是编译阶段执行的，在代码运行之前。
import {a} from './xxx.js'; // a是只读的，a的属性是可修改的，但是其他代码也会被影响

// 不能使用表达式和变量，因为是编译阶段执行的
// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}


// 模块整体加载所在的那个对象，应该是可以静态分析的，所以不允许运行时改变。
import * as circle from './circle';
// 下面两行都是不允许的
circle.foo = 'hello';
circle.area = function () {};
```

>export default 命令,为模块置顶默认的输出
```
export default function () {
  console.log('foo');
}

import customName from './export-default';
customName();
```


## NodeJS模块化-CommonJS(require-module.exports)运行时加载

```
// node
module.exports = {
  a : function() {},
  b : 'xxx'
};
// AMD or CMD
define(function(require, exports, module){
  module.exports = {
    a : function() {},
    b : 'xxx'
  };
});


// node
var m = require('./a');
m.a();
// AMD or CMD
define(function(require, exports, module){
   var m = require('./a');
   m.a();
});
```