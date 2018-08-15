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
 *  获取当前路由的同源路由数组，
 *  为最近须权限节点
 */
const getOriginRouterName = router => {
  const allMatchedRouter = []

  let i = router.matched.length
  while (i > 0) {
    i--
    allMatchedRouter.push(router.matched[i].name)

    if (
      router.matched[i].meta &&
      router.matched[i].meta.auth !== true &&
      router.name !== router.matched[i].name
    ) break
  }

  return allMatchedRouter
}

/*
 *  登录保护，未登录页面强制跳转 login 页面
 */
export const protectLogin = (to, from) => {
  let target

  if (to.name === 'login' && storage.getItem('token')) {
    target = { name: from.name }
  }
  if (to.name !== 'login' && !storage.getItem('token')) {
    target = { name: 'login' }
  }

  return target
}

/*
 *  指定路由来源，
 *  meta: { from: RouterNmae[, back: RouterNmae] }
 */
export const limitRouteForm = (to, from) => {
  let target

  if (to.meta && to.meta.limit && to.meta.limit.from) {
    let limits = []

    if (typeof to.meta.limit.from === 'string') {
      limits.push(to.meta.limit.from)
    } else if (Array.isArray(to.meta.limit.from)) {
      limits = to.meta.limit.from
    } else {
      throw Error('[limitRouteForm]: limt.form expected String or Array')
    }

    if (!limits.includes(from.name)) {
      target = { name: to.meta.limit.back || '404' }
    }
  }

  return target
}

/*
 *  页面跳转时检查权限，无权限定位到 403 页面
 */
export const checkRouteAuth = (to, from) => {
  let target

  const allMatchedRouter = getOriginRouterName(to)

  if (
    (to.meta && to.meta.auth === false) ||
    (allMatchedRouter.length === 1)
  ) {
    target = undefined
    return target
  }

  const permission = getRouterName(
    JSON.parse(storage.getItem('nav'))
  )

  const isIncludes = permission.filter(
    v => allMatchedRouter.includes(v)
  )

  if (isIncludes.length) {
    target = undefined
  } else {
    target = { name: '403' }
  }

  return target
}
