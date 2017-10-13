import Vue from 'vue'
import Vuex from 'vuex'

/* global */
import global from '@/pages/data'

/* modules */


Vue.use( Vuex )

export default new Vuex.Store({
  ...global,
  modules: {

  }
})