/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')// 引入path模块
const WebpackBar = require('webpackbar')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CompressionPlugin = require('compression-webpack-plugin') //TODO
function resolve(dir) {
    return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}

console.log('------------读取配置文件')
module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? './' : './',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false, // 生产环境的 source map
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
        open: true,
        compress: true,
        progress: false,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            new SpeedMeasurePlugin(),
            new WebpackBar({
                name: '测试',
                color: 'green'
            })
            // new BundleAnalyzerPlugin()

        ]
    },
    chainWebpack: (config) => {
        // config.module
        //     .rule('svg')
        //     .exclude.add(resolve('src/icons'))
        //     .end()
        // config.module
        //     .rule('icons')
        //     .test(/\.svg$/)
        //     .include.add(resolve('src/icons'))
        //     .end()
        //     .use('svg-sprite-loader')
        //     .loader('svg-sprite-loader')
        //     .options({
        //         symbolId: 'icon-[name]'
        //     })
        //     .end()

        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-module-eval-source-map')
            )
    }

}
