import storage from '@/utils/storage'

export const beforeEach = (to, from, next) => {
  const target = {}
  if (to.name === 'login' && storage.getItem('token')) {
    target.name = from.name
  }
  if (to.name !== 'login' && !storage.getItem('token')) {
    target.name = 'login'
  }

  next(target)
}
