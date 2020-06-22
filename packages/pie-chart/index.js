import PieChart from './src/main'

/* istanbul ignore next */
PieChart.install = function (Vue) {
    Vue.component(PieChart.name, PieChart)
}

export default PieChart
