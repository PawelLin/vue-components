import Clock from './src/main'

/* istanbul ignore next */
Clock.install = function (Vue) {
    Vue.component(Clock.name, Clock)
}

export default Clock
