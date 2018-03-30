import Vue from 'vue'
import Vuex from 'vuex'

/* root */
import root from '@/store'

/* views */
const Stores = require.context('@/views', true, /store\.js$/)

const modules = []

Stores.keys().forEach((url) => {
  const store = Stores(url).default
  modules[store.namespace] = store
})

Vue.use( Vuex )

export default new Vuex.Store({
  ...root,
  modules: {
    ...modules
  }
})
