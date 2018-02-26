const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//添加body-parser配置，方便获取post请求中的body中的内容

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // 设置端口

// api中需要的Route
// =============================================================================
var router = express.Router();             

// 测试服务是否正常运行
router.get('/', function(req, res) {
    res.json({ message: 'nice，服务器来了!' });   
});

// 这里将会创建更多的路由

// 注册路由 -------------------------------
// 我们所有的接口将以 /api 开头
app.use('/api', router);

// 启动服务
// =============================================================================
app.listen(port);
console.log('服务正常运行在端口： port ' + port);