// 引入 Vue，App，Vue-router，Vuex
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* element 组件按需引入
 * http://element.eleme.io/#/zh-CN/component/quickstart#an-xu-yin-ru 
 */

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
