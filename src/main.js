import Vue from 'vue'
import router from '@/router'
import models from '@/models'

import '@/libs/element-ui'
import '@/libs/vue-class-component'

Vue.config.productionTip = false

new Vue({
  router,
  store: models,
  render () {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  }
}).$mount('#app')
