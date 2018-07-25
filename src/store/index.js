import Vue from 'vue'
import Vuex from 'vuex'

import root from './layouts'

const modules = {}
const stores = require.context('@/store/', true, /\/index\.js$/)
stores.keys().forEach(item => {
  if (/^\.\/index\.js$/.test(item)) return

  const store = stores(item).default
  modules[store.namespace] = store
})

Vue.use(Vuex)

export default new Vuex.Store({
  ...root,
  modules
})
