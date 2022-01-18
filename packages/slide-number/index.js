import SlideNumber from './src/main'

/* istanbul ignore next */
SlideNumber.install = function (Vue) {
    Vue.component(SlideNumber.name, SlideNumber)
}

export default SlideNumber
