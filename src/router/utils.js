import router from './index'

export const get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

export const checkRouterName = routers => {
  if (!Array.isArray(routers)) return null

  let isVlidatedRouteName = true
  routers.forEach(name => {
    const vlidate = router.getMatchedComponents({name: name})
    if (vlidate.length === 0) {
      isVlidatedRouteName = false
    }
  })

  return isVlidatedRouteName
}
