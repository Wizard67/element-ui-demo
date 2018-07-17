import Vue from 'vue';
import Vuex from 'vuex';
import { getStoreArray } from './utils';

const modules = getStoreArray();

Vue.use(Vuex);

export default new Vuex.Store({
  ...modules
});
