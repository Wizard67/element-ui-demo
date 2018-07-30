import Vue from 'vue'
import Vuex from 'vuex'

const modules = {}
const context = require.context('./', false, /\.js$/)

context.keys()
  .filter(item => item !== './index.js')
  .map(key => {
    const module = context(key).default
    modules[module.namespace] = module
  })

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
