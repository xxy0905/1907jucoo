const express = require("express");
const history = require("connect-history-api-fallback");
const {createProxyMiddleware} = require("http-proxy-middleware");
const app = express();
app.use("/api",createProxyMiddleware({
    target:"https://api.juooo.com",
    changeOrigin:true,
    pathRewrite:{
        "^/api":""
    }
}))

// history是一个函数。给该函数传递的内容是一个对象，该对象是对history的配置
app.use(history({
    index:"index.html",// 可以通过该属性，指定跳转的文件。
    rewrites:[
        {
            from: /.\.html$/,
            to:"/home.html"
        }
    ],


    // // BUG:当输入的地址有扩展名时，不发生跳转。
}));
app.use(express.static(__dirname+"/build"))
app.listen(80,function () {
    console.log("success");
})