import Vue from 'vue'
import App from '@/views/App.vue'
import router from '@/plugins/router'
import store from '@/plugins/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
