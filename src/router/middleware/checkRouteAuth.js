import vue from 'vue'
import storage from '@/utils/storage'
import { get } from './utils'

/*
 *  查找路由数组中的 name
 */
const getRouteName = router => {
  if (!Array.isArray(router)) {
    vue.util.warn("[router middleware: checkRouteAuth]: getRouteName's argument expected Array")
  }

  const permission = []
  const findRouteName = routeArr => {
    routeArr.map(item => {
      if (item.hasOwnProperty('name')) {
        permission.push(item.name)
      } else if (item.hasOwnProperty('children')) {
        findRouteName(item.children)
      }
    })
  }
  findRouteName(router)

  return permission
}

/*
 *  获取当前路由的同源路由数组，
 *  为最近须权限节点
 */
const getOriginRouteName = router => {
  const allName = []

  let i = 0
  let flag = false
  while (i < router.matched.length) {
    if (
      get(['matched', i, 'meta', 'auth'], router) ||
      router.name === router.matched[i].name ||
      flag
    ) {
      flag = true
      allName.push(router.matched[i].name)
    }
    i++
  }
  return allName
}

/*
 *  路由权限检查，无权限定位到 403 页面
 *
 *  meta: {
 *    auth: <Boolean>
 *  }
 *
 */
export default (to, from, next) => {
  let target

  const originRouteName = getOriginRouteName(to)

  if (
    get(['meta', 'auth'], to) === null ||
    get(['meta', 'auth'], to) === false
  ) {
    return next(target)
  }

  const permission = getRouteName(
    JSON.parse(storage.getItem('nav'))
  )

  const isIncludes = permission.filter(
    r => originRouteName.includes(r)
  )

  if (isIncludes.length === 0) {
    target = { name: '403' }
  }

  next(target)
}
