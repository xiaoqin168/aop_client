// webpack 自定义配置文件，请勿删除！
module.exports = function (webpack, context) {
    return {
        loaders: {}, // 配置loader 
        plugins: [], // 插件
        uglify: true, // 是否压缩
        externals: {
            'react': 'var window.React',
            'react-dom': 'var window.ReactDOM'
        }, // 需要从外部CND引入的JS包
        resolve:{ // 配置resolve，为了保证安全性，不允许覆盖`resolve.module`
            alias:{

            }
        }, 
        polyfill: false, // 打包是否包括 polyfill
        dll: ['aop-ui', 'react-router'], // 是否启动DllPlugin
        proxy: {} // 配置代理
    }
}