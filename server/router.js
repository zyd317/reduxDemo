/**
 * Created by yidi.zhao on 2017/12/5.
 * 处理页面路由，页面请求
 */
let express = require('express'),
    router = express.Router();

// 代理ajax请求
router.use('/api/:key', function (req, res, next) {
    let param = req.params;
    let str = JSON.stringify(param);
    res.set({
        'Content-Type': 'application/json',
        'Content-Length': str.length
    });
    res.send(str);
});

module.exports = router;

