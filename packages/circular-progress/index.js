import CircularProgress from './src/main'

/* istanbul ignore next */
CircularProgress.install = function (Vue) {
    Vue.component(CircularProgress.name, CircularProgress)
}

export default CircularProgress
