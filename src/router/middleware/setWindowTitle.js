import { get } from './utils'

/*
 *  设置页面标题
 *
 *  meta: {
 *    title: <String>
 *  }
 *
 */
export default (to, from, next) => {
  let target

  if (get(['meta', 'title'], to)) {
    window.document.title = to.meta.title
  }

  next(target)
}
