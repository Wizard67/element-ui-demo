import Vue from 'vue'
import router from '@/router'
import models from '@/models'
import '@/libs'

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
