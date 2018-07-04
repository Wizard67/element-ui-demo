import Vue from 'vue';
import Vuex from 'vuex';
import { getStoreArray } from '@/utils';

import rootStore from '@/store';

const modules = getStoreArray();

Vue.use(Vuex);

export default new Vuex.Store({
  ...rootStore,
  modules
});
