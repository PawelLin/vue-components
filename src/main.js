import Vue from 'vue'
import router from '@/router'
import App from './App.vue'

// 本地开发组件库调试
import pui from '../packages'
Vue.use(pui)

// 打包发布测试
// import UI from 'vue-pawel-ui'
// Vue.use(UI)
// import { Button } from 'vue-pawel-ui'
// Vue.use(Button)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
