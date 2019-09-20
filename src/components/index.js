// 实现整体组件统一注册
// eslint-disable-next-line import/no-duplicates
import layoutAside from './home/layout-aside'
import layoutHeaderVue from './home/layout-header'
export default { install: function (vue) {
  vue.component('layout-aside', layoutAside)
  vue.component('layout-header', layoutHeaderVue)
}
}
