module.exports = {
    // baseUrl: "/",//根路径
    outputDir: "dist",//构建输出目录
    assetsDir: "assets", //静态资源目录
    lintOnSave: false,
    devServer: {
        open: true,
        proxy: {
            //配置跨域
            '/api': {
                target: 'https://app.zhijianjiaxiang.com', //源地址 
                changeOrigin: true, //改变源 
                pathRewrite: {
                    '^/api': 'https://app.zhijianjiaxiang.com' //路径重写 
                }
            }
        }
    }
}