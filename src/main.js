import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUl from 'element-ui'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.config.productionTip = false
Vue.use(ElementUl)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
