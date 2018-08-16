import storage from '@/utils/storage'

/*
 *  登录保护，未登录页面强制跳转 login 页面
 *
 */
const key = 'token'

export default (to, from, next) => {
  let target

  if (to.name === 'login' && storage.getItem(key)) {
    target = { name: from.name }
  }
  if (to.name !== 'login' && !storage.getItem(key)) {
    target = { name: 'login' }
  }

  next(target)
}
