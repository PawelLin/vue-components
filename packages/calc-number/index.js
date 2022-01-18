import CalcNumber from './src/main'

/* istanbul ignore next */
CalcNumber.install = function (Vue) {
    Vue.component(CalcNumber.name, CalcNumber)
}

export default CalcNumber
