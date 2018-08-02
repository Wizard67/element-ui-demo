import storage from '@/utils/storage'
import NProgress from '@/assets/nprogress'

export const beforeEach = (to, from, next) => {
  const target = {}
  if (to.name === 'login' && storage.getItem('token')) {
    target.name = from.name
  }
  if (to.name !== 'login' && !storage.getItem('token')) {
    target.name = 'login'
  }

  NProgress.start()
  next(target)
}

export const afterEach = (to, from) => {
  NProgress.done()
}
