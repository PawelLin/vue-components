import Button from './button'
import Input from './input'
import ImagePreview from './image-preview'
import PieChart from './pie-chart'
import Clock from './clock'

const components = [
    Button,
    Input,
    ImagePreview,
    PieChart,
    Clock
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
    Clock
}
