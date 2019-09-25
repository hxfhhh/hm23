import Vue from 'vue'
import App from './App.vue'
import router from './permisson'
import ElementUl from 'element-ui'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from './utils/axios.config'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUl)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
