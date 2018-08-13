import vue from 'vue'
import storage from '@/utils/storage'

/*
 *  提取服务端传递的路由数组中的 name，
 *  将作为权限依据
 */
const getRouterName = router => {
  if (!Array.isArray(router)) vue.util.warn('Expected Array in param')

  const permission = []

  const findRouterName = routerArr => {
    routerArr.map(item => {
      if (item.hasOwnProperty('name')) {
        permission.push(item.name)
      } else if (item.hasOwnProperty('children')) {
        findRouterName(item.children)
      }
    })
  }
  findRouterName(router)

  return permission
}

/*
 *  获取当前路由的同源路由数组
 */
const getParentsRouterName = router => {
  const allMatchedRouter = []

  let i = router.matched.length
  while (i > 0) {
    i--
    if (router.matched[i].meta && router.matched[i].meta.auth !== true) break

    allMatchedRouter.push(router.matched[i].name)
  }

  allMatchedRouter.push(router.name)

  return allMatchedRouter
}

/*
 *  登录保护，未登录页面强制跳转 login 页面
 */
export const loginProtection = (to, from) => {
  let target

  if (to.name === 'login' && storage.getItem('token')) {
    target = false
  }
  if (to.name !== 'login' && !storage.getItem('token')) {
    target = { name: 'login' }
  }

  return target
}

/*
 *  页面跳转时检查权限，无权限定位到 403 页面
 */
export const checkRouteAuth = (to, from) => {
  let target

  const permission = getRouterName(
    JSON.parse(storage.getItem('nav'))
  )

  const allMatchedRouter = getParentsRouterName(to)

  const isIncludes = permission.filter(
    v => allMatchedRouter.includes(v)
  )

  if (Object.keys(to.meta).length && to.meta.auth !== true) {
    target = undefined
    return target
  }

  if (isIncludes.length) {
    target = undefined
  } else {
    target = { name: '403' }
  }

  return target
}
