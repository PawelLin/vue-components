const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/assets/css/App.scss";'
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('_views', resolve('src/views'))
    }
}
