const path = require('path')
const resolve = dir => path.join(__dirname, './', dir)

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@directives', resolve('src/vue/directives'))
      .set('@filters', resolve('src/vue/filters'))
      .set('@mixins', resolve('src/vue/mixins'))

    config.externals({
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      axios: 'axios',
      'vue-echarts': 'echarts'
    })
  }
}
