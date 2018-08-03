import Vue from 'vue'
import Vuex from 'vuex'

const modules = {}
const context = require.context('./', false, /\.js$/)

context.keys()
  .filter(item => item !== './index.js')
  .map(key => {
    const namespace = key.match(/(?<=\.\/).*?(?=\.js)/)
    const module = context(key).default
    modules[namespace[0]] = {
      namespaced: true,
      ...module
    }
  })

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
