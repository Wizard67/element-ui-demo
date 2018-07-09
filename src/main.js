import Vue from 'vue';
import router from '@/router';
import store from '@/store/index';

import '@/assets/element-ui';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render() {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}).$mount('#app');
