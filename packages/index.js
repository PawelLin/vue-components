import Button from './button'
import Input from './input'
import ImagePreview from './image-preview'
import PieChart from './pie-chart'
import Clock from './clock'
import Icon from './icon'
import ScrollTable from './scroll-table'
import Steps from './steps'
import CircularProgress from './circular-progress'
import SlideNumber from './slide-number'
import CalcNumber from './calc-number'

const components = [
    Button,
    Input,
    ImagePreview,
    PieChart,
    Clock,
    Icon,
    ScrollTable,
    Steps,
    CircularProgress,
    SlideNumber,
    CalcNumber
]

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Button,
    Input,
    ImagePreview,
    PieChart,
    Clock,
    Icon,
    ScrollTable,
    Steps,
    CircularProgress,
    SlideNumber,
    CalcNumber
}
