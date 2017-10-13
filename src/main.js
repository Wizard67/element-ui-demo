import Vue from 'vue'

import router from '@/configs/router'
import store from '@/configs/store'

/* element 组件按需引入
 * http://element.eleme.io/#/zh-CN/component/quickstart#an-xu-yin-ru 
 */
import '@/configs/elementUI'

import App from '@/App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
