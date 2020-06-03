// 用于对组件单独打包，便于按需加载
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
const merge = require('webpack-merge')
const webpackLibBaseConfig = require('./webpack.lib.base.js')
// 引入入口配置文件
const entryConfig = require('../packages/entry_config.js')

// 定义入口
const entry = {}
entryConfig.configList.map((item) => {
    const componentName = item.name.toLowerCase()
    entry[componentName] = path.resolve(__dirname, '../packages/' + componentName + '/index.js')
})

module.exports = merge(webpackLibBaseConfig, {
    mode: 'production',
    devtool: '#source-map',
    entry,
    output: {
    // 打包过后的文件的输出的路径
        path: path.resolve(__dirname, '../lib'),
        // 打包后生成的js文件
        // 解释下这个[name]是怎么来的，它是根据你的entry命名来的，入口叫啥，出口的[name]就叫啥
        filename: '[name].js',
        // 我这儿目前还没有资源引用
        publicPath: '/',
        library: 'vue-pawel-ui',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader // 使用miniCssExtractPlugin.loader代替style-loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
    // 新建miniCssExtractPlugin实例并配置
        new MiniCssExtractPlugin({
            filename: 'themes/[name].css'
        }),
        // 压缩css
        new OptimizeCssnanoPlugin({
            sourceMap: true,
            cssnanoOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }]
            }
        })
    ]
})
