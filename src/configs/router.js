import Vue from 'vue'
import Router from 'vue-router'


const Dashboard = require('@/pages/dashboard/page').default
const Pages = require.context('@/pages', true, /page\.vue$/)
/**
 * auto inject the page.vue
 */
function importAll (r) {
  let list = []

  r.keys().forEach(pageUrl => {
    let page = r(pageUrl).default

    list.push({
      path: page.path,
      name: page.name,
      component: page
    })
  })

  return list
}
const routeList = importAll(Pages)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    ...routeList
  ]
})
