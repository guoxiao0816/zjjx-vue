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
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ // 把px单位换算成rem单位
                        rootValue: 37.5,
                        selectorBlackList: ['weui', 'mu', 'vant'], // 忽略转换正则匹配项
                        propList: ['*']
                    })
                ]
            }
        }
    }
}