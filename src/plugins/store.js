import Vue from 'vue'
import Vuex from 'vuex'

const Stores = require.context('@/views/', true, /store\.js$/)

let root = {}
const modules = [] 

Stores.keys().forEach((url) => {
  const store = Stores(url).default
  if (store.namespaced) {
    modules[store.namespace] = store
  } else {
    root = store
  }
})

Vue.use( Vuex )

export default new Vuex.Store({
  ...root,
  modules: {
    ...modules
  }
})
