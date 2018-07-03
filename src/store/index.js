import Vue from 'vue';
import Vuex from 'vuex';
import { importAll } from '@/utils';

import rootStore from '@/store';

const stores = require.context('@/views/', true, /store\.js$/);
const moduleStore = importAll(stores, 'store');

Vue.use(Vuex);

export default new Vuex.Store({
  ...rootStore,
  modules: {
    ...moduleStore
  }
});
