import Vue from 'vue'
import Vuex from 'vuex'

const modules = {}
const context = require.context('./', false, /\.js$/)

context.keys()
  .filter(item => item !== './index.js')
  .map(key => {
    // uglifyjs error
    // const namespace = key.match(/(?<=\.\/).*?(?=\.js)/)
    const namespace = key.replace(/(\.\/)|(\.js)/g, '')

    const module = context(key).default
    modules[namespace] = {
      namespaced: true,
      ...module
    }
  })

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
