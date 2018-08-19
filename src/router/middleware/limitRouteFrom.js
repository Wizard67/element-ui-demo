import vue from 'vue'
import { get, checkRouterName } from './utils'

/*
 *  限制可访问路由的来源
 *
 *  meta: {
 *    limit: {
 *      from: <String> | <Array>,
 *      back: <String> | '404'
 *    }
 *  }
 *
 */
export default (to, from, next) => {
  let target

  const limitFrom = get(['meta', 'limit', 'from'], to)
  const limitBack = get(['meta', 'limit', 'back'], to)

  if (limitFrom) {
    let whiteLists = []

    if (typeof limitFrom === 'string') {
      checkRouterName([limitFrom])
      whiteLists.push(limitFrom)
    } else if (Array.isArray(limitFrom)) {
      checkRouterName(limitFrom)
      whiteLists = limitFrom
    } else {
      vue.util.warn('[router middleware: limitRouteForm]: limit.from expected String or Array')
    }

    if (!whiteLists.includes(from.name)) {
      if (checkRouterName([limitBack])) {
        target = { name: limitBack }
      } else {
        target = { name: '404' }
      }
    }
  }

  next(target)
}
